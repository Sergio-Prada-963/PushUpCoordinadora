import { getRutas, postRutas, updateRutas, deleteRutas} from "../controllers/rutas.controller.js";
import { Router } from "express";

const router = Router();

router.get("/all", getRutas);
router.post("/",postRutas);
router.patch("/:id", updateRutas);
router.delete("/:id", deleteRutas);

export default router;