import expressAsyncHandler from "express-async-handler";
import { Product } from "../schema/model.js";

export const createProductController = expressAsyncHandler(async(req, res, next) => {
  let result = await Product.create(req.body);
  res.status(200).json({
    success: true,
    message: "product created successfully",
    result: result,
  });
});

export const readAllProductController = expressAsyncHandler(async(req,res,next)=>{
  let result = await Product.find({});
  res.status(200).json({
    success:true,
    message:"product read successfully",
    result:result
  })
  
})

export const readProductController = expressAsyncHandler(async(req,res,next)=>{
  let result = await Product.findById(req.params.id)
    res.status(200).json({
      success:true,
      message:"specific product read successfully",
      result:result
    })
})

export const updateProductController = expressAsyncHandler(async(req,res,next)=>{
  let result = await Product.findByIdAndUpdate(req.params.id, req.body,{new:true});
  res.status(200).json({
    success:true,
    message:"product updated successfully",
    result:result
  })
})

export const deleteProductController = expressAsyncHandler(async(req,res,next)=>{
  let result = Product.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success:true,
    message:"product deleted successfully",
    result:result
  })
})