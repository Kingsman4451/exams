import { Router } from "express";
import controller from "./controller.js";
import checktoken from "../../middlewares/checktoken.js";
import validate from "../../middlewares/validation.js";

const router = Router();

router.post("/answers/:testId", checktoken, validate, controller.POST);

export default router;
