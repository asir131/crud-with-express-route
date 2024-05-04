const express = require('express');
const User = require('../models/User');
const router = express.Router();

const useController = require('../controller/useController');

router.get('/', useController.getAllUsers);
router.get('/:id', useController.getSingleUser);
router.post('/', useController.createNewUser);
router.patch('/:id', useController.updateUser);
router.delete('/:id', useController.deleteUser);

module.exports = router;
