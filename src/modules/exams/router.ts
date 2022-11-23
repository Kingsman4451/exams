import { Router } from "express";
import controller from "./controller.js";
import checktoken from "../../middlewares/checktoken.js";
import validate from "../../middlewares/validation.js";

const router = Router();

router.get("/exams", checktoken, controller.GETEXAMS);
router.get("/exams/:examId", checktoken, controller.GET);
router.post("/exams", checktoken, validate, controller.POST);

export default router;
