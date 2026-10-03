import Router from 'express';
import AUthMiddleware from "../Middleware/AuthMiddleware.js";
import { ShareNote } from '../Controller/Share.Controller.js';
const router = Router()

router.use(AUthMiddleware)

router.post("/share",ShareNote)

router.get("/:shareId",)

export default router