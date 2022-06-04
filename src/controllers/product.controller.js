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

const postProduct = async(req, res) => {
    try {
        const { brand, model, photo, price, size, color, description, serie, idUser } = req.body;
        const connect = await connection();
        const product = await connect.query('INSERT INTO  PRODUCT (brand,model,photo,price,size,color,description,serie,idUser) VALUES (?,?,?,?,?,?,?,?,?)', [brand, model, photo, Number(price), Number(size), color, description, serie, Number(idUser)]);
        return res.status(201).json({
            ok: true,
            product: product[0]
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            error
        });
    }
}

module.exports = {
    getProducts,
    postProduct
}