import expressAsyncHandler from "express-async-handler"
import { College } from "../schema/model.js"

export const createCollegeController = expressAsyncHandler(async(req,res,next)=>{
let result = await College.create(req.body)
res.status(201).json({
  success:true,
  message:"college created successfully",
  result:result
})
})
export const readAllCollegeController = expressAsyncHandler(async(req,res,next)=>{
let result = await College.find({})
res.status(200).json({
  success:true,
  message:"college read successfully",
  result:result
})
})
export const readCollegeController = expressAsyncHandler(async(req,res,next)=>{
let result = await College.findById(req.params.id)
res.status(200).json({
  success:true,
  message:"college read successfully",
  result:result
})
})

export const updateCollegeController = expressAsyncHandler(async(req,res,next)=>{
  let result = await College.findByIdAndUpdate(req.params.id, req.body,{new:true});
  res.status(201).json({
    success:true,
    message:"college updated successfully",
    result:result
  })
})

export const deleteCollegeController = expressAsyncHandler(async(req,res,next)=>{
  let result = await College.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success:true,
    message:"college deleted successfully",
    result:result
  })
})

