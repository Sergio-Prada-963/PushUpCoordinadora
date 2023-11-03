import { getEnvios, postEnvios, updateEnvios, deleteEnvios} from "../controllers/envios.controller.js";
import { Router } from "express";

const router = Router();

router.get("/all", getEnvios);
router.post("/",postEnvios);
router.patch("/:id", updateEnvios);
router.delete("/:id", deleteEnvios);

export default router;

