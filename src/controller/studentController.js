import expressAsyncHandler from "express-async-handler";
import { Student } from "../schema/model.js";

export const createStudentController = expressAsyncHandler(async(req,res,next)=>{
  let result = await Student.create(req.body);
  res.status(201).json({
    sucess:true,
    message: "student created successfully",
    result:result
  })

});

export const readAllStudentController = expressAsyncHandler(async(req,res,next)=>{
  let result = await Student.find({});
  res.status(200).json({
    success:true,
    message:"student read successfully",
    result:result
  });
})

export const readSpecificStudentController = expressAsyncHandler(async(req,res,next)=>{
  let result = await Student.findById(req.params.id);
  res.status(200).json({
    sucess:true,
    message: "student read successfully",
    result:result
  })
});

export const updateStudentController = expressAsyncHandler(async(req,res,next)=>{
  let result = await Student.findByIdAndUpdate(req.params.id, req.body,{new:true})
  res.status(201).json({
    sucess:true,
    message: "student updated successfully",
    result:result
  })
})

export const deleteStudentController = expressAsyncHandler(async(req,res,next)=>{
  let result = await Student.findByIdAndDelete(req.params.id)
  res.status(200).json({
    sucess:true,
    message: "student deleted successfully",
    result:result
  })

})