import Joi from "joi";
let teacherValidation = Joi.object()
.keys({
  name:Joi.string().required().min(3).max(20).messages({
    "any.required":"name is required",
    "string.base":"field must be string",
    "string.min":"name must be atleast 2 characters long",
    "string.max":"name must be atmost 20 characters"
  })
  .allow(''),

  age:Joi.number().required()
  // .min(18)
  // .max(59),
  .custom((value,msg)=>{
    if(value >=18){
      return true
    }
    else{
      return msg.message("age must be greater than 18")
    }
  }).messages({
    "any.required":"age is required",
    "number.base":"field must be number",
    "number.min":"age should be greater or equal to 18",
    "number.max":"age should be less than 60"
  }),

  isMarried:Joi.boolean().required().messages({
    "any.required":"isMarried is required",
    "boolean.base":"field must be valid boolean "
  }),
  
  subject:Joi.string().required()
}).unknown(false);

export default teacherValidation;