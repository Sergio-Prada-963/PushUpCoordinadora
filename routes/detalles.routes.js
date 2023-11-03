import { getDetalles, postDetalles, updateDetalles, deleteDetalles} from "../controllers/detalles.controller.js";
import { Router } from "express";

const router = Router();

router.get("/all", getDetalles);
router.post("/",postDetalles);
router.patch("/:id", updateDetalles);
router.delete("/:id", deleteDetalles);

export default router;
