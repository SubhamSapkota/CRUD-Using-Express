import expressAsyncHandler from "express-async-handler";
import { Review } from "../schema/model.js";


export const createReviewController = expressAsyncHandler(async(req, res, next) => {
  let result = await Review.create(req.body);
  res.status(200).json({
    success: true,
    message: "review created successfully",
    result: result,
  });
});

export const readAllReviewController = expressAsyncHandler(async(req,res,next)=>{
  let result = await Review.find({});
  res.status(200).json({
    success:true,
    message:"review read successfully",
    result:result
  })
  
})

export const readReviewController = expressAsyncHandler(async(req,res,next)=>{
  let result = await Review.findById(req.params.id)
    res.status(200).json({
      success:true,
      message:"specific review read successfully",
      result:result
    })
})

export const updateReviewController = expressAsyncHandler(async(req,res,next)=>{
  let result = await Review.findByIdAndUpdate(req.params.id, req.body,{new:true});
  res.status(200).json({
    success:true,
    message:"review updated successfully",
    result:result
  })
})

export const deleteReviewController = expressAsyncHandler(async(req,res,next)=>{
  let result = await Review.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success:true,
    message:"review deleted successfully",
    result:result
  })
})