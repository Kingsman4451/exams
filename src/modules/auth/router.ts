import { Router } from "express";
import controller from "./controller.js";
import validation from "../../middlewares/validation.js";

const router = Router();

router.post("/signin", validation, controller.SIGNIN);
router.post("/signup", validation, controller.SIGNUP);

export default router;
