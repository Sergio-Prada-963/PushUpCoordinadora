import { getCargos, postCargos, updateCargos, deleteCargos} from "../controllers/cargos.controller.js";
import { Router } from "express";

const router = Router();

router.get("/all", getCargos);
router.post("/",postCargos);
router.patch("/:id", updateCargos);
router.delete("/:id", deleteCargos);

export default router;

