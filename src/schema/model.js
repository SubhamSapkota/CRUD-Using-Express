//define table name

import { model } from "mongoose";
import studentSchema from "./studentSchema.js";
import bookSchema from "./bookSchema.js";
import productSchema from "./productSchema.js";
import TeacherSchema from "./teacherSchema.js";
import traineeSchema from "./traineeSchema.js";
import collegeSchema from "./collegeSchema.js";
import userSchema from "./userSchema.js";
import reviewSchema from "./reviewSchema.js";

export let Student = model("Student",studentSchema);

export let Book = model("Book",bookSchema);

export let Product = model("Product",productSchema)

export let Teacher = model("Teacher",TeacherSchema)

export let Trainee = model("Trainee",traineeSchema)

export let College = model("College",collegeSchema);

export let User = model("User",userSchema);

export let Review = model("Review",reviewSchema);