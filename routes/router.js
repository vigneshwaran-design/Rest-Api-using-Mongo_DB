import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "../controllers/goalController.js";

const router = express.Router();
router.route("/").get(getUser).post(createUser);
router.route("/:id").delete(deleteUser).put(updateUser);

export default router;
