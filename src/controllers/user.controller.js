const { connection } = require('../database/connection');

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
        const usersSystem = await connect.query('INSERT INTO USER_SYSTEM (name,lastName,email,password,idRole) VALUES(?,?,?,?,?)', [name, lastName, email, password, idRole]);
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

module.exports = {
    getUserSystem,
    postUserSytem,
    putUserSytem,
    deleteUserSytem
}