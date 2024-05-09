const express = require('express');
const { json } = require('express');
const mongoose = require('mongoose');
const userRouter = require('./router/userRouter');
const studentRouter = require('./router/studentRouter');
const authRouter = require('./router/authRouter');

const app = express();


app.use(json());
require('dotenv').config()
const port = process.env.port;
mongoose.connect("mongodb://localhost:27017/company").then(() => {
    console.log("server connected");
    app.listen(port, () => {
        console.log(`Server is listening at http://localhost:${port}`);
    });
}).catch(err => console.error(err));

app.use('/user', userRouter);
app.use('/student', studentRouter);
app.use('/auth', authRouter);



// app.post('/user', (req, res) => {
//    let user = new User({
//     name: req.body.name,
//     email: req.body.email
//    })
//    user.save().then(data => {
//     console.log(data);
//     res.json({
//         message:"User Created",
//         data
//     })
//    })
//    .catch(err=>{
//     console.log(err);
//    })
//    ;
// });
// app.get('/user', async(req, res) => {
//     try {
//         const userData = await User.find({});
//         res.json(userData);
//       } catch (error) {
//         res.status(500).json({ message: error.message });
//       }
// });

// app.get('/user/:id', async (req, res) => {
//   const userData = await User.find();
//   console.log(userData);
//   let user
//      const {id}=req.params;
//      for(let i=0; i<userData.length; i++){
//          if(userData[i].id == id){
//               user = userData[i];
//          }
 
//      }
//      res.send(user);
//  });

//  app.patch('/user/:id', async (req, res) => {
  
  
  
//      const {id}=req.params;
//       await User.findByIdAndUpdate(id,{
//       name: req.body.name,
//       email: req.body.email
//      });
//      const userDataAfterUpdate = await User.find();
    
//      res.send(userDataAfterUpdate);
//  });

//  app.delete('/user/:id', async (req, res) => {
  
//   const {id} = req.params;
//    await User.findByIdAndDelete(id);
//   const afterDelete = await User.find();
  
//      res.send(afterDelete);
//  });




// In a Basic Way-------------------------------------------------------------------
// let users = [
//     {
//         id : 1,
//         name: "asir",
//         email: "asir@gmail.com",
//     },
//     {
//         id : 2,
//         name:"gg",
//         email: "gg@gmail.com",
//     }
// ]


// app.get('/user', (req, res) => {
//     res.send(users);
// });

// app.get('/user/:id', (req, res) => {
//  let user;
//     const {id}=req.params;
//     for(let i=0; i<users.length; i++){
//         if(users[i].id == id){
//             user = users[i];
//         }

//     }
//     res.send(user);
// });

// app.patch('/user/:id', (req, res) => {
//     let user;

    
//        const {id}=req.params;
//        for(let i=0; i<users.length; i++){
//            if(users[i].id == id){
//             users[i].email =req.body.email ;
//            }
   
//        }
//        res.send(users);
//    });

// app.post('/user', (req, res) => {
   

//     const { name, email } = req.body;
//     console.log(req.body);
//     const id = users.length + 1;
//     const user = {
//         id,
//         name,
//         email
//     };
//     users.push(user)
//     res.send({
//         status: true,
//         users
//     });
// });


