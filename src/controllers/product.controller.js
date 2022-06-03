const { connection } = require("../database/connection");

const getProducts = async(req, res) => {
    try {
        const connect = await connection();
        const products = await connect.query('SELECT * FROM PRODUCT');
        return res.status(200).json({
            ok: true,
            products: products[0]
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            error
        });
    }
}

module.exports = {
    getProducts
}