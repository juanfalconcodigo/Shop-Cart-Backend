const { Router } = require('express');
const { getProducts, postProduct } = require('../controllers');

const router = Router();

router.get('/', getProducts);
router.post('/', postProduct);

module.exports = router;