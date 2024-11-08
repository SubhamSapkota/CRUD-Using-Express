/* 
  make express application
  attach port to it
*/
import express, { json } from "express" // this is how express app is created
import bikeRouter from "./src/routes/bikeRouter.js";
import traineeRouter from "./src/routes/traineeRouter.js";
import schoolRouter from "./src/routes/schoolRouter.js";
import vehicleRouter from "./src/routes/vehicleRouter.js";
import connectToMongoDb from "./src/connectToDb/connectToMongoDb.js";
import studentRouter from "./src/routes/studentRouter.js";
import bookRouter from "./src/routes/bookRouter.js";
import productRouter from "./src/routes/productRouter.js";
import errorMiddleware from "./src/middleware/errorMiddleware.js";

import teacherRouter from "./src/routes/teacherRouter.js";
import collegeRouter from "./src/routes/collegeRouter.js";
import errorMiddlewareSecond from "./src/middleware/errorMiddlewareSecond.js";
import userRouter from "./src/routes/userRouter.js";
import reviewRouter from "./src/routes/reviewRouter.js";
 //after import, add .js to the file path
let expressApp = express();
expressApp.use(json()) // to make sytem capable to get json data //always place this code just top level


connectToMongoDb();

//port attachment
//        (port,fun)
expressApp.listen(8000,()=>{
  console.log("application is listening at 8000")
})

expressApp.use("/student",studentRouter);

expressApp.use("/book",bookRouter)

expressApp.use("/product",productRouter)

expressApp.use("/bike",bikeRouter)


expressApp.use("/trainee",traineeRouter)

expressApp.use("/school",schoolRouter)

expressApp.use("/vehicle",vehicleRouter)

expressApp.use("/teacher",teacherRouter)

expressApp.use("/college",collegeRouter)

expressApp.use("/user",userRouter)

expressApp.use("/review",reviewRouter)



expressApp.use(errorMiddlewareSecond)
expressApp.use(errorMiddleware)
//always put error middleware at last










// expressApp.use(firstRouter)