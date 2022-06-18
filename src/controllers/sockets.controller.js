const { getAllMessageRoom } = require("../utils/messages");
const { getRoomUsers } = require("../utils/user");

const getUsersRoom = (req, res) => {
    const ROOM = req.params['room'];
    const users = getRoomUsers(ROOM);
    return res.status(202).json({
        ok: true,
        users
    });
}

const getMessagesRoom = (req, res) => {
    const messages = getAllMessageRoom();
    return res.status(202).json({
        ok: true,
        messages,
        limit: Number(process.env.LIMIT_CACHE_MESSAGES)
    });
}

module.exports = {
    getUsersRoom,
    getMessagesRoom
}