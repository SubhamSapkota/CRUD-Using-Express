
import expressAsyncHandler from "express-async-handler";
import { Teacher } from "../schema/model.js";

export const createTeacherController = expressAsyncHandler(async(req,res,next)=>{
  let result = await Teacher.create(req.body);
  res.status(201).json({
    success:true,
    message:"teacher created successfully",
    result:result
  })
})

export const readAllTeacherController = expressAsyncHandler(async(req,res,next)=>{
  let result = Teacher.find({})
  res.status(200).json({
    success:true,
    message:"teacher read successfully",
    result:result
  })
})

export const readTeacherController = expressAsyncHandler(async(req,res,next)=>{
  let result = Teacher.findById(req.params.id)
  res.status(200).json({
    success:true,
    message:"teacher read successfully",
    result:result
  })
})

export const updateTeacherController = expressAsyncHandler(async(req,res,next)=>{
  let result = Teacher.findByIdAndUpdate(req.params.id,req.body,{new:true})
  res.status(201).json({
    success:true,
    message:"teacher updated successfully",
    result:result
  })
})

export const deleteTeacherController = expressAsyncHandler(async(req,res,next)=>{
  let result = Teacher.findByIdAndDelete(req.params.id)
  res.status(200).json({
    success:true,
    message:"message deleted successfully",
    result:result
  })
})