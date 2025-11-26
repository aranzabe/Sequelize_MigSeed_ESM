import { Router } from "express";
import controlador from "../controllers/rolController.js";

export const router = Router();
router.get("/", controlador.rolesGet);