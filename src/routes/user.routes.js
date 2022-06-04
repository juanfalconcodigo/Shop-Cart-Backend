const { Router } = require('express');
const { getUserSystem, postUserSytem, putUserSytem, deleteUserSytem, loginUserSystem } = require('../controllers');
const router = Router();

router.get('/', getUserSystem);
router.post('/', postUserSytem);
router.post('/login', loginUserSystem);
router.put('/:id', putUserSytem);
router.delete('/:id', deleteUserSytem);

module.exports = router;