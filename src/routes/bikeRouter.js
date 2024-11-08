import { Router } from "express";

let bikeRouter = Router();
bikeRouter
.route("/")
.post((req,res,next)=>{
  console.log("I am middleware1")
  let error = new Error("my own error")
  next(error) // if error not passed it skips 'error middleware' and calls normal middleware
},
//error middleware should be called with next("some value")
(err,req,res,next)=>{
  console.log("I am error middleware")
  console.log(err.message)
  next()

},
(req,res,next)=>{
  console.log("I am middleware2")
  next()
},(req,res,next)=>{
  console.log("I am middleware3")
})
.get((req,res,next)=>{
  // res.json("bike read succesfully")
  console.log("bike read succesfully")
  next();
},(req,res,next)=>{
  req.name="nitan";
  req.age=30;
  next();
},(req,res,next)=>{
  console.log(req.name)
  console.log(req.age)
})
.patch((req,res,next)=>{
  res.json("bike updated succesfully")
})
.delete((req,res,next)=>{
  res.json("bike deleted succesfully")
})

export default bikeRouter;

/* 
MIDDLEWARE
  function-> which has req, res, next access
  next() is used to trigger next middleware

*/