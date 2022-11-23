import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/subjects/main", controller.GET);
router.get("/subjects/:first", controller.GETSECOND);

export default router;
