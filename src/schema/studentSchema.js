import { Schema } from "mongoose";

let studentSchema = Schema({
  name: {
    type: String,
    // required: [true, "name field is required"],
    // lowercase:true,
    // uppercase:true,
    trim:true,
    // minLength:[3,"name must be atleast 3 characters long"],
    maxLength:[30, "name must be at most 30 characters long"],
    validate: (value)=>{
      if(value==="shuvv"){
        throw new Error("shuvv is not valid student")
      }
    }
  },

  password: {
    type: String,
    // required: [true, "password field is required"],
  },

  email: {
    type: String,
    // required: [true, "email field is required"],
  },

  phoneNumber: {
    type: String,
    // required: [true, "phoneNumber field is required"],
  },

  roll: {
    type: Number,
    // required: [true, "roll field is required"],
    min:[400,"roll must be more than or equal to 400"],
    max:[500,"roll must be less than or equal to 500"]
  },
  
  isMarried: {
    type: Boolean,
    default:true,
  },

  spouseName: {
    type: String,
    // required: [true, "spouseName field is required"],
  },

  gender: {
    type: String,
    default:"male",
    validate:(value)=>{
      if((value ==="male")||(value==="female")||(value==="other"))
       {
       
      }
      else{
        throw new Error("gender is not valid")
      }
    }
  },

  dob: {
    type: Date,
    // required: [true, "dob field is required"],
  },
  
  location:{
    country:{
      type:String,
      required:[true,"country field is required"]
    },

    exactLocation:{
      type:String,
      required:[true,"exactLocation field is required"]
    }
  },

  favTeacher:[
    {
      type:String,
    }
  ],

  favSubject:[
    {
      bookName:{
        type:String
      },
      bookAuthor:{
        type:String
      }
    }
  ]
});

export default studentSchema;

/* 
Manipulation
  lowercase
  uppercase
  trim
  default
*/

/* 
Validation
  in case of string
    minLength:[]
    maxLength:[]

  in case of number
    min:[]
    max:[]
*/
