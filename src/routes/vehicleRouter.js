import { Router } from "express";

let vehicleRouter = Router();

vehicleRouter
  .route("/")
  .post((req,res,next)=>{
    res.json({
      sucess:true,
      message:"vehicle created successfully"
    })
  })
  .get((req,res,next)=>{
    res.json({
      sucess:true,
      message:"vehicle read successfully"
    })
  })
  .patch((req,res,next)=>{
    res.json({
      sucess:true,
      message:"vehicle updated successfully"
    })
  })
  .delete((req,res,next)=>{
    res.json({
      sucess:true,
      message:"vehicle deleted successfully"
    })
  })

export default vehicleRouter;

