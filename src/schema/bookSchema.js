import { Schema } from "mongoose";

let bookSchema = Schema({
  title: {
    type: String,
    required: [true, "title field is required"]
  },
  author:{
    type:String,
    required:[true,"author field is required"],
  },
  price:{
    type:Number,
    required:[true,"price field is required"]
  },
});

export default bookSchema;