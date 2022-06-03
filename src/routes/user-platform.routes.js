const { Router } = require('express');
const { createUserPlatform, loginUserPlatform } = require('../controllers');
const router = Router();

router.post('/', createUserPlatform);
router.post('/login', loginUserPlatform);


module.exports = router;