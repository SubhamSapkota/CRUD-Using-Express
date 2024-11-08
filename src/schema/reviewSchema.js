import { Schema } from "mongoose";

let reviewSchema = Schema({
  user:{
    type:String
  },
  product:{
    type:String
  },
  description:{
    type:String
  }
})

export default reviewSchema;