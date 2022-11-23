import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/unversities", controller.GET);
router.get("/unversities/:id", controller.GET);

export default router;
