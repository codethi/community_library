import { Router } from "express";
import userControrller from "../controller/user.controllers.js";
import {
  validate,
  validateUserId,
} from "../middlewares/validation.middlewares.js";
import { userSchema } from "../schema/user.schema.js";

const router = Router();

router.post(
  "/users",
  validate(userSchema),
  userControrller.createUserController
);
router.get("/users", userControrller.findAllUserController);
router.get(
  "/users/:id",
  validateUserId,
  userControrller.findUserByIdController
);
router.put(
  "/users/:id",
  validate(userSchema),
  validateUserId,
  userControrller.updateUserController
);
router.delete(
  "/users/:id",
  validateUserId,
  userControrller.deleteUserController
);

export default router;
