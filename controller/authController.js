const User =require("../models/User");


module.exports.createNewUser = async (req, res) => {
    let user = new User({
     name: req.body.name,
     email: req.body.email,
     password: req.body.password,
     confirmPassword: req.body.confirmPassword,
    })
    user.save().then(data => {
     
     res.json({
         message:"User Created",
         data
     })
    })
    .catch(err=>{
     console.log("message from error",err);
    })
    ;
 };


 