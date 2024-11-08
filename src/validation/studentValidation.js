import Joi from "joi";
let studentValidation = Joi.object()
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

  phoneNumber:Joi.number().required(),
  roll:Joi.number().required(),
  dob:Joi.string().required(),

  isMarried:Joi.boolean().required().messages({
    "any.required":"isMarried is required",
    "boolean.base":"field must be valid boolean "
  }),
  spouseName:Joi.when("isMarried",
    {
      is:true,
      then: Joi.string().required(),
      otherwise:Joi.string()
    }).messages({
      "any.required":"spouseName is required",
    }),

  //if married = true => spouseName => required
  //if married = false => spouseName => not required

  
  gender:Joi.string().required().valid("male","female","other").messages({
    "string.base":"gender must be string",
    "any.required":"gender field is required",
    "any.only":"gender must be either male, female or other"
  }),

  email:Joi.string().required()
  .custom((value,msg)=>{
    let validEmail = value.match("^[\\w\\.-]+@[a-zA-Z\\d\\.-]+\\.[a-zA-Z]{2,}$");
    if(validEmail){
      return true;
    }
    else{
      return msg.message("email is not valid")
    }
  })
  .messages({
    "any.required":"email is required",
  }),

  password: Joi.string().required()
  .custom((value,msg)=>{
    let validPassword = value.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,15}$");
    if(validPassword){
      return true;
    }
    else{
      return msg.message("password must have atleast one uppercase, one lowercase, one digit and should be between 8 and 15 characters")
    }
  })
  .messages({
    "any.required":"password is required",
  }),

  location: Joi.object().keys({
    country:Joi.string().required(),
    exactLocation:Joi.string().required()
  })
  .messages({
    "any.required":"location is required",
  }),

  favTeacher: Joi.array().items(Joi.string().required())
  .messages({
    "any.required":"favTeacher is required",
  }),

  favSubject:Joi.array().items(
    Joi.object().keys({
      bookName:Joi.string().required(),
      bookAuthor:Joi.string().required()
    })
  )
  .messages({
    "any.required":"favSubject is required",
  }) , 


}).unknown(false);

export default studentValidation;