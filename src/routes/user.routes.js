import { Router } from "express";
import userControrller from "../controller/user.controllers.js";
import {
  validate,
  validateUserId,
} from "../middlewares/validation.middlewares.js";
import { userSchema } from "../schema/user.schema.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/", validate(userSchema), userControrller.createUserController);
router.post("/login", userControrller.loginUserController);

router.use(authMiddleware);
router.get("/", userControrller.findAllUserController);
router.get("/:id", validateUserId, userControrller.findUserByIdController);
router.patch("/:id", validateUserId, userControrller.updateUserController);
router.delete("/:id", validateUserId, userControrller.deleteUserController);

export default router;
