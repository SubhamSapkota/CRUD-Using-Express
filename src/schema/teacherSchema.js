import { Schema } from "mongoose";

let TeacherSchema = Schema({
  name:{
    type:String,
    required:[true,"name field is required"]
  },
  age:{
    type:String,
    required:[true,"age field is required"]
  },
  isMarried:{
    type:Boolean,
    required:[true,"isMarried field is required"]
  },
  subject:{
    type:String,
    required:[true,"subject field is required"]
  },

})

export default TeacherSchema;