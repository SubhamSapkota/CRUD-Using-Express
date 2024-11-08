import { Router } from "express";
import { createReviewController, deleteReviewController, readAllReviewController, readReviewController, updateReviewController } from "../controller/reviewController.js";


let reviewRouter = Router();

reviewRouter
  .route("/")
  .post(createReviewController)
  .get(readAllReviewController)

reviewRouter
  .route("/:id")
  .get(readReviewController)
  .patch(updateReviewController)
  .delete(deleteReviewController)
export default reviewRouter;