import { Router } from "express";
import { Student } from "../schema/model.js";
import {
  createStudentController,
  deleteStudentController,
  readAllStudentController,
  readSpecificStudentController,
  updateStudentController,
} from "../controller/studentController.js";

import validation from "../middleware/validation.js";
import studentValidation from "../validation/studentValidation.js";

let studentRouter = Router();
// let m1=(value)=>{
//   return (req,res,next)=>{
//     console.log("I am middleware 1")
//     if(true){
//       next()
//     }
//   }
// }
// let m2=(req,res,next)=>{
//   console.log("i am middleware 2");
// }

//without function call(use if you dont want to pass value) (req,res,next)=>{}

// with function call (use if you want to pass value) ()=>{ return (req,res,next)=>{}}

// let isAuthorized=(value)=>{
//   return (req,res,next)=>{
//     if(value==="admin"||value==="superadmin"){
//       next();
//     }else{
//       console.log(
//         "you cannot delete user"
//       )
//     }
//   }
// }
// let deleteUser=()=>{
//   console.log("user deleted successfully")
// }

// .string()
// value must be strong
//it should not be empty
// .min(3)=> filed must have atleast three charatcers
//.max(10)=> length must be less than 10 characters

//.number()
// value must be number(it doesnot see type)
//it means 21 and "21" are valid data
// .min(18)=> checks for value

//.boolean()
// value must be boolean

//required=> any(string,number,boolean)
// you must pass field

// enum => fixed value (male,female,other)
// .valid("male","female","other")

//throw custom error

//object
//Joi.object().keys({
//  .....
// })

// array
// Joi.array().items()




studentRouter
  .route("/") //localhost:8000/student
  // .post(m1(false),m2)
  // .post(isAuthorized("user"),deleteUser)
  .post(validation(studentValidation), createStudentController)
  .get(readAllStudentController);

studentRouter
  .route("/:id")
  .get(readSpecificStudentController)
  .patch(updateStudentController)
  .delete(deleteStudentController);

export default studentRouter;
