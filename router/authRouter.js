const express = require('express');

const router = express.Router();

const {createNewUser} = require('../controller/authController');

router.route('/').post(createNewUser);




module.exports = router;