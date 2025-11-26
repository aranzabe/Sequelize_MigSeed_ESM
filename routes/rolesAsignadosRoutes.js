import { Router } from "express";
import controlador from "../controllers/rolAsignadoController.js";

export const router = Router();

router.get("/", controlador.rolesAsignadosGet);
router.get('/all', controlador.rolesAsignadosDNIGetAll);
router.get("/:dni", controlador.rolesAsignadosDNIGet);



