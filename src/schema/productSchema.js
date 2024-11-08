import { Schema } from "mongoose";

let productSchema = Schema({
 productName:{
    type:String,
    required:[true,"productName field is required"]
  },
  price:{
    type:Number,
    required:[true,"price field is required"]
  },
  quantity:{
    type:Number,
    required:[true,"quantity field is required"]

  }
})

export default productSchema;