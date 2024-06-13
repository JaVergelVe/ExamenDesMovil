import { Router } from "express";
import routerLogin from "./login.routes.js";

const RouterGeneral = Router();

RouterGeneral.use('/api', routerLogin);

export default RouterGeneral;