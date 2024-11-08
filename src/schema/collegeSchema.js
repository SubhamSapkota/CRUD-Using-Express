import { Schema } from "mongoose";

let collegeSchema = Schema({
  collegeName:{
    type:String,
    required:[true, "collegeName field is required"]
  },
  location:{
    type:String,
    required:[true, "location field is required"]
  },
})

export default collegeSchema;