const { getUserSystem, postUserSytem, putUserSytem, deleteUserSytem, loginUserSystem } = require('./user.controller');
const { createUserPlatform, loginUserPlatform } = require('./user-platform.controller');
const { getProducts, postProduct } = require('./product.controller');
module.exports = {
    getUserSystem,
    postUserSytem,
    putUserSytem,
    deleteUserSytem,
    createUserPlatform,
    loginUserPlatform,
    getProducts,
    loginUserSystem,
    postProduct
}