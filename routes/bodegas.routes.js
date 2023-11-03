import { getBodegas, postBodegas, updateBodegas, deleteBodegas} from "../controllers/bodegas.controller.js";
import { Router } from "express";

const router = Router();

router.get("/all", getBodegas);
router.post("/",postBodegas);
router.patch("/:id", updateBodegas);
router.delete("/:id", deleteBodegas);

export default router;

