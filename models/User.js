const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    // Add other properties as needed
});

const User = mongoose.model("developers", UserSchema);

module.exports = User;


