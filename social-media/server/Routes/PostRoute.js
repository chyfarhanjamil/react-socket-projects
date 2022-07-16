import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getTimelinePosts,
  likePost,
  updatePost,
} from "../Controllers/PostController.js";
const router = express.Router();

router.get("/:id", getPost);
router.get("/:id/timeline", getTimelinePosts);
router.post("/", createPost);
router.put("/:id", updatePost);
router.put("/:id/like", likePost);
router.delete("/:id", deletePost);

export default router;
