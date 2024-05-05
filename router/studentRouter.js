const express = require('express');
const Student = require('../models/Student');
const router = express.Router();

const {createNewStudent,getAllStudents,getSingleStudent,updateStudent,deleteStudent} = require('../controller/studentController');

router.route('/').get(getAllStudents).post(createNewStudent);
router.route('/:id').get(getSingleStudent).patch(updateStudent).delete(deleteStudent);



module.exports = router;