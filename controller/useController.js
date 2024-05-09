const User =require("../models/User");


let createNewUser = async (req, res) => {
    let user = new User({
     name: req.body.name,
     email: req.body.email
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

 let getAllUsers = async (req, res) => {
    try {
        const userData = await User.find({});
        res.json(userData);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};

let getSingleUser = async (req, res) => {
    const userData = await User.find();
  console.log(userData);
  let user
     const {id}=req.params;
     for(let i=0; i<userData.length; i++){
         if(userData[i].id == id){
              user = userData[i];
         }
 
     }
     res.send(user);
 };
 

 let updateUser = async (req, res) => {
  
  
  
    const {id}=req.params;
     await User.findByIdAndUpdate(id,{
     name: req.body.name,
     email: req.body.email
    });
    const userDataAfterUpdate = await User.find();
   
    res.send(userDataAfterUpdate);
} ;

let deleteUser = async (req, res) => {
  
    const {id} = req.params;
     await User.findByIdAndDelete(id);
    const afterDelete = await User.find();
    
       res.send(afterDelete);
   };


   module.exports = {
    createNewUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser
   }