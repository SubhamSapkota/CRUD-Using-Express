import { Router } from "express";
import { createTraineeController, deleteTraineeController, readAllTraineeController, readTraineeController, updateTraineeController } from "../controller/traineeController.js";

let traineeRouter = Router();

traineeRouter
  .route("/")
  .post(createTraineeController)
  .get(readAllTraineeController)

traineeRouter
  .route("/:id")
  .get(readTraineeController)
  .patch(updateTraineeController)
  .delete(deleteTraineeController)

export default traineeRouter;

