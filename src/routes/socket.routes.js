const { Router } = require('express');
const { getUsersRoom, getMessagesRoom } = require('../controllers');
const router = Router();
router.get('/user/:room', getUsersRoom);
router.get('/messages/admin', getMessagesRoom);
module.exports = router;