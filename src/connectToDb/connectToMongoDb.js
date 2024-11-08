import mongoose from "mongoose";

const connectToMongoDb=()=>{
  mongoose.connect("mongodb://0.0.0.0:27017/dw18");
  console.log("Application is connected to MongoDb successfully");
}
export default connectToMongoDb;