const { Router } = require('express');
const { getProducts } = require('../controllers');

const router = Router();

router.get('/', getProducts);

module.exports = router;