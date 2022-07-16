import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  likePost,
  updatePost,
} from "../Controllers/PostController.js";
const router = express.Router();

router.post("/", createPost);
router.get("/:id", getPost);
router.put("/:id", updatePost);
router.put("/:id/like", likePost);
router.delete("/:id", deletePost);

export default router;
