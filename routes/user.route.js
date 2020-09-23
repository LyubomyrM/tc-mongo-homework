const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.post('/', userController.createUser);
router.get('/:userId', userController.findUser);
router.patch('/:userId', userController.updateUser);
router.delete('/:userId', userController.deleteUser);


module.exports = router;  