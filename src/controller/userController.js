import expressAsyncHandler from "express-async-handler";
import { User } from "../schema/model.js"

export const createUserController = expressAsyncHandler(async(req,res,next)=>{
  let result = await User.create(req.body);
  res.status(201).json(
    {
      success:true,
      message:"user created successfully",
      result:result
    }
  )
});

export const readAllUserController = expressAsyncHandler(async(req,res,next)=>{
  let result = await User.find({});
  res.status(200).json({
    success:true,
    message:"user read successfully",
    result:result
  })
})

export const readUserController = expressAsyncHandler(async(req,res,next)=>{
  let result = await User.findById(req.params.id);
  res.status(200).json({
    success:true,
    message:"user read successfully",
    result:result
  })
})

export const updateUserController = expressAsyncHandler(async(req,res,next)=>{
  let result = await User.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.status(201).json({
    success:true,
    message:"user updated successfully",
    result:result
  })
})

export const deleteUserController = expressAsyncHandler(async(req,res,next)=>{
  let result = await User.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success:true,
    message:"user deleted successfully",
    result:result
  })
})