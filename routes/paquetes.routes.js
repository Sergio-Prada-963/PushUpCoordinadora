import { getPaquetes, postPaquetes, updatePaquete, deletePaquetes} from "../controllers/paquetes.controller.js";
import { Router } from "express";

const router = Router();

router.get("/all", getPaquetes);
router.post("/",postPaquetes);
router.patch("/:id", updatePaquete);
router.delete("/:id", deletePaquetes);

export default router;
