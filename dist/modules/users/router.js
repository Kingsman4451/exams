import { Router } from "express";
import controller from "./controller.js";
import checktoken from "../../middlewares/checktoken.js";
const router = Router();
router.get("/user", checktoken, controller.GET);
export default router;
