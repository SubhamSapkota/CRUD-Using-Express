import { Router } from "express";
import { createTeacherController, deleteTeacherController, readAllTeacherController, readTeacherController, updateTeacherController } from "../controller/teacherController.js";
import validation from "../middleware/validation.js";
import teacherValidation from "../validation/teacherValidation.js";

let teacherRouter = Router();

teacherRouter
  .route("/")
  .post(validation(teacherValidation),createTeacherController)
  .get(readAllTeacherController)

teacherRouter
  .route("/:id")
  .get(readTeacherController)
  .patch(updateTeacherController)
  .delete(deleteTeacherController)

export default teacherRouter;