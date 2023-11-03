import { getInventarios, postInventarios, updateInventarios, deleteInventarios} from "../controllers/inventarios.controller.js";
import { Router } from "express";

const router = Router();

router.get("/all", getInventarios);
router.post("/",postInventarios);
router.patch("/:id", updateInventarios);
router.delete("/:id", deleteInventarios);

export default router;

