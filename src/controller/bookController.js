import expressAsyncHandler from "express-async-handler";
import { Book } from "../schema/model.js";

export const createBookController = expressAsyncHandler(async(req,res,next)=>{
  let result = await Book.create(req.body);
    res.status(200).json({
      success:true,
      message:"Book created successfully",
      result:result
    })
})

export const readAllBookController = expressAsyncHandler(async(req,res,next)=>{
  let result = await Book.find({})
    res.status(2000).json({
      success:true,
      message:"Book read successfully",
      result:result
    })
})


export const readSpecificBookController =expressAsyncHandler( async(req,res,next)=>{
  let result = await Book.findById(req.params.id)
  res.status(200).json({
    success:true,
    message:"Book read Successfully",
    result:result
  })

})

export const updateBookController = expressAsyncHandler( async(req,res,next)=>{
  let result = await Book.findByIdAndUpdate(req.params.id, req.body, {next:true});
  res.status(200).json({
    success:true,
    message:"Book updated successfully",
    result:result
  })
})

export const deleteBookController = expressAsyncHandler(async(req,res,next)=>{
  let result = Book.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success:true,
    message:"Book deleted Successfully",
    result:result
  })
})