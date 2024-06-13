import { Router } from "express";
import loginController from "../controllers/login.controller.js";

const routerLogin = Router();

routerLogin.get('/login/:id', loginController.getLoginUnico)

export default routerLogin;