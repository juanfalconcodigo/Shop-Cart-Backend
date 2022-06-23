const { getUserSystem, postUserSytem, putUserSytem, deleteUserSytem, loginUserSystem } = require('./user.controller');
const { createUserPlatform, loginUserPlatform } = require('./user-platform.controller');
const { getProducts, postProduct } = require('./product.controller');
const { getUsersRoom, getMessagesRoom } = require('./sockets.controller');
module.exports = {
    getUserSystem,
    postUserSytem,
    putUserSytem,
    deleteUserSytem,
    createUserPlatform,
    loginUserPlatform,
    getProducts,
    loginUserSystem,
    postProduct,
    getUsersRoom,
    getMessagesRoom
}