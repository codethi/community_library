import { Router } from "express";
import userControrller from '../controller/user.controllers.js'

const router = Router();

router.post('/users', userControrller.createUserController)

export default router