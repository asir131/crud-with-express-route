const Student =require("../models/Student");


let createNewStudent = async (req, res) => {
    let student = new Student({
     name: req.body.name,
     id: req.body.id
    })
    student.save().then(data => {
     console.log(data);
     res.json({
         message:"User Created",
         data
     })
    })
    .catch(err=>{
     console.log(err);
    })
    ;
 };

 let getAllStudents = async (req, res) => {
    try {
        const studentData = await Student.find({});
        res.json(studentData);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};

let getSingleStudent = async (req, res) => {
    const {id}=req.params;
    const studentData = await Student.findById(id);
//   console.log(studentData);
//   let student
     
//      for(let i=0; i<studentData.length; i++){
//          if(studentData[i].id == id){
//             student = studentData[i];
//          }
 
//      }
     res.send(studentData);
 };
 

 let updateStudent = async (req, res) => {
  
  
  
    const {id}=req.params;
     await Student.findByIdAndUpdate(id,{
     name: req.body.name,
     id: req.body.id
    });
    const studentDataAfterUpdate = await Student.find();
   
    res.send(studentDataAfterUpdate);
} ;

let deleteStudent = async (req, res) => {
  
    const {id} = req.params;
     await Student.findByIdAndDelete(id);
    const afterDelete = await Student.find();
    
       res.send(afterDelete);
   };


   module.exports = {
    createNewStudent,
    getAllStudents,
    getSingleStudent,
    updateStudent,
    deleteStudent
   }