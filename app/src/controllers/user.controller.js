const { connection } = require('../database/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getUserSystem = async(req, res) => {
    try {
        const connect = await connection();
        const usersSystem = await connect.query('SELECT * FROM USER_SYSTEM');
        return res.status(202).json({
            ok: true,
            users: usersSystem[0]
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            error
        });
    }
}

const postUserSytem = async(req, res) => {
    try {
        const { name, lastName, email, password, idRole } = req.body;
        const connect = await connection();
        const usersSystem = await connect.query('INSERT INTO USER_SYSTEM (name,lastName,email,password,idRole) VALUES(?,?,?,?,?)', [name, lastName, email, bcrypt.hashSync(password, 10), idRole]);
        return res.status(201).json({
            ok: true,
            user: usersSystem[0]
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            error
        });
    }
}

const putUserSytem = async(req, res) => {
    try {
        const idUser = req.params['id'];
        const { name, lastName, email, } = req.body;
        const connect = await connection();
        const usersSystem = await connect.query('UPDATE USER_SYSTEM SET name=?,lastName=?,email=? WHERE idUser=?', [name, lastName, email, idUser]);
        return res.status(202).json({
            ok: true,
            user: usersSystem[0]
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            error
        });
    }
}


const deleteUserSytem = async(req, res) => {
    try {
        const idUser = req.params['id'];
        const connect = await connection();
        const usersSystem = await connect.query('DELETE FROM USER_SYSTEM WHERE idUser=?', [idUser]);
        return res.status(202).json({
            ok: true,
            user: usersSystem[0]
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            error
        });
    }
}


const loginUserSystem = async(req, res) => {
    try {
        const { email, password } = req.body;
        const connect = await connection();
        let userFound = await connect.query('SELECT * FROM USER_SYSTEM WHERE email=?', [email]);
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
    getUserSystem,
    postUserSytem,
    putUserSytem,
    deleteUserSytem,
    loginUserSystem
}