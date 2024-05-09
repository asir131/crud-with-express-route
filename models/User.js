const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required:[true,'Enter your email address'],
        trim: true,
        uniue:true,
        validate: {
            validator: function(value){
                return /\S+@\S+\.\S+/.test(value)
            },
            message: 'Invalid email'
        }
    },
    password: {
        type: String,
        required:[true,'Enter your password'],
        
    },
    confirmPassword: {
        type: String,
        required:[true,'Enter your Confirm Password'],
        validate:{
            validator: function(){
                return this.password===this.confirmPassword
            },
            message: 'Invalid Confirm Password'
        }
    }
    // Add other properties as needed
});

const User = mongoose.model("developers", UserSchema);

module.exports = User;


