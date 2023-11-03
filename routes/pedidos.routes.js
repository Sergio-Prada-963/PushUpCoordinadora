import { getPedidos, postPedidos, updatePedido, deletePedidos} from "../controllers/pedidos.controller.js";
import { Router } from "express";

const router = Router();

router.get("/all", getPedidos);
router.post("/",postPedidos);
router.patch("/:id", updatePedido);
router.delete("/:id", deletePedidos);

export default router;
