import expressAsyncHandler from "express-async-handler";
import { Trainee } from "../schema/model.js";


export const createTraineeController = expressAsyncHandler(async(req,res,next)=>{
  let result = await Trainee.create(req.body);
  res.status(201).json({
    sucess:true,
    message:"trainee created successfully",
    result:result
  })
})

export const readAllTraineeController = expressAsyncHandler(async(req,res,next)=>{
  let result = await Trainee.find({});
  res.status(200).json({
    sucess:true,
    message:"trainee read successfully",
    result:result
  })
})

export const readTraineeController = expressAsyncHandler(async(req,res,next)=>{
  let result = await Trainee.FindById(req.params.id);
  res.status(200).json({
    success:true,
    message:"trainee read successfully",
    result:result
  })
})

export const updateTraineeController = expressAsyncHandler(async(req,res,next)=>{
  let result = await Trainee.FindByIdAndUpdate(req.params.id, req.body,{new:true})
  res.status(201).json({
    success:true,
    message:"trainee updated successfully",
    result:result
  })
})

export const deleteTraineeController = expressAsyncHandler(async(req,res,next)=>{
  let result = await Trainee.FindByIdAndDelete(req.params.id);
  res.status(200).json({
    success:true,
    message:"message deleted successfully",
    result:result
  })
})