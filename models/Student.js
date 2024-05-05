const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
    name: String,
    id : String,

    // Add other properties as needed
});

const Studnt = mongoose.model("students", studentSchema);

module.exports = Studnt;
