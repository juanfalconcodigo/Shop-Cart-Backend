const { connection } = require("../database/connection");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createUserPlatform = async(req, res) => {

    try {
        const { name, lastName, email, password } = req.body;
        const connect = await connection();
        const newUserPlatform = await connect.query('INSERT INTO  USER_PLATFORM (name,lastName,email,password) VALUES(?,?,?,?)', [name, lastName, email, bcrypt.hashSync(password, 10)]);
        return res.status(201).json({
            ok: true,
            user: newUserPlatform[0]
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            error
        });
    }
}


const loginUserPlatform = async(req, res) => {
    try {
        const { email, password } = req.body;
        const connect = await connection();
        let userFound = await connect.query('SELECT * FROM USER_PLATFORM WHERE email=?', [email]);
        if (userFound[0] && userFound[0].length === 0) {
            return res.status(404).json({
                ok: false,
                user: 'Not found email'
            });
        }
        if (!bcrypt.compareSync(password, userFound[0][0]['password'])) {
            return res.status(404).json({
                ok: false,
                user: 'Not Found password'
            });
        }
        const token = jwt.sign({ user: {...userFound[0][0] } }, process.env.SECRET_JWT, { expiresIn: '1h' });
        return res.status(202).json({
            ok: true,
            user: userFound[0][0],
            token
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            error
        });
    }
}

module.exports = {
    createUserPlatform,
    loginUserPlatform
}