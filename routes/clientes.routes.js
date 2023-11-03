import { getClientes, postcliente, updateCliente, deleteCliente} from "../controllers/clientes.controller.js";
import { Router } from "express";

const router = Router();

router.get("/all", getClientes);
router.post("/",postcliente);
router.patch("/:id", updateCliente);
router.delete("/:id", deleteCliente);

export default router;
