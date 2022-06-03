const { getUserSystem, postUserSytem, putUserSytem, deleteUserSytem } = require('./user.controller');
const { createUserPlatform, loginUserPlatform } = require('./user-platform.controller');
const { getProducts } = require('./product.controller');
module.exports = {
    getUserSystem,
    postUserSytem,
    putUserSytem,
    deleteUserSytem,
    createUserPlatform,
    loginUserPlatform,
    getProducts
}