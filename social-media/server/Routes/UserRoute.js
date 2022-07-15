import express from "express";

import {
  getUser,
  updateUser,
  deleteUser,
  followUser,
  unFollowUser,
} from "../Controllers/UserController.js";

const router = express.Router();

router.get("/:id", getUser);
router.put("/:id", updateUser);
router.put("/:id/follow", followUser);
router.put("/:id/unfollow", unFollowUser);
router.delete("/:id", deleteUser);

export default router;
