const mongoose = require('mongoose');
const User =require("../models/User");

const studentSchema = new mongoose.Schema({
    name: String,
    id : String,

    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:User,
    }

    // Add other properties as needed
});

const Studnt = mongoose.model("students", studentSchema);

module.exports = Studnt;
