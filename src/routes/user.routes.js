const { Router } = require('express');
const { getUserSystem, postUserSytem, putUserSytem, deleteUserSytem } = require('../controllers');
const router = Router();

router.get('/', getUserSystem);
router.post('/', postUserSytem);
router.put('/:id', putUserSytem);
router.delete('/:id', deleteUserSytem);

module.exports = router;