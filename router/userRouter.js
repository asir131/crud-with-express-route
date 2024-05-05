const express = require('express');
const User = require('../models/User');
const router = express.Router();

const {createNewUser,getAllUsers,getSingleUser,updateUser,deleteUser} = require('../controller/useController');

router.route('/').get(getAllUsers).post(createNewUser);
router.route('/:id').get(getSingleUser).patch(updateUser).delete(deleteUser);



module.exports = router;
