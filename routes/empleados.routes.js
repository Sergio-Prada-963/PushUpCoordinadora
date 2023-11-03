import { getEmpleados, postEmpleados, updateEmpleados, deleteEmpleados} from "../controllers/empleados.controller.js";
import { Router } from "express";

const router = Router();

router.get("/all", getEmpleados);
router.post("/",postEmpleados);
router.patch("/:id", updateEmpleados);
router.delete("/:id", deleteEmpleados);

export default router;

