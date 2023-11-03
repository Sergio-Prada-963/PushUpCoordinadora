import { getPaquete_inventario, postPaquete_inventario, updatePaquete_inventario, deletePaquete_inventario} from "../controllers/paquete_inventario.controller.js";
import { Router } from "express";

const router = Router();

router.get("/all", getPaquete_inventario);
router.post("/",postPaquete_inventario);
router.patch("/:id", updatePaquete_inventario);
router.delete("/:id", deletePaquete_inventario);

export default router;

