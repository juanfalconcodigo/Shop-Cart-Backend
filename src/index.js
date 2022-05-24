const express = require('express');
const app = express();

const PORT = process.env.PORT || 4301;


let users = [{
        id: 1,
        name: "Jobs"
    },
    {
        id: 2,
        name: "Juan"
    },
    {
        id: 3,
        name: "Mario"
    }
]


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/v1/api/user', (req, res) => {
    try {
        return res.status(200).json({
            ok: true,
            users: users
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            error
        });
    }
});


app.get('/v1/api/user/:id', (req, res) => {
    try {
        const id = req.params['id'];
        const user = users.find((e) => e.id === Number(id));
        if (!user) {
            return res.status(404).json({
                ok: false,
                user: null
            });
        }
        return res.status(200).json({
            ok: true,
            user
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            error
        });
    }
});


app.post('/v1/api/user', (req, res) => {
    try {
        const data = req.body;
        users.push({...data, id: users.length + 1 });
        return res.status(201).json({
            ok: true,
            users
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            error
        });
    }
});


app.put('/v1/api/user/:id', (req, res) => {
    try {
        const id = req.params['id']
        const data = req.body;
        const findIdUser = users.findIndex((e) => e.id === Number(id));
        if (findIdUser === -1) {
            return res.status(404).json({
                ok: false,
                user: null
            });
        }

        users[findIdUser] = {
            ...users[findIdUser],
            ...data
        }

        return res.status(202).json({
            ok: true,
            user: users[findIdUser]
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            error
        });
    }
});


app.delete('/v1/api/user/:id', (req, res) => {
    try {

        const id = req.params['id'];

        const newUsers = users.filter((e) => e.id !== Number(id));
        users = [...newUsers];
        return res.status(202).json({
            ok: true
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            error
        });
    }
});


app.listen(PORT, (err) => {
    if (err) throw new Error(err);
    console.log(`Server is running in port : ${PORT}`);
});