const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required:[true,'Enter your email address'],
        trim: true,
        unique: true,
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

UserSchema.pre('save',async function(next){
    try{
        const hashedPassword = await bcrypt.hash(this.password,10)
        this.password=hashedPassword;
        this.confirmPassword=null;
    }
    catch(err){
        console.log(err);
    }
})


const User = mongoose.model("developers", UserSchema);

module.exports = User;


