import Router from 'express';
import AUthMiddleware from "../Middleware/AuthMiddleware.js";

const router = Router()

router.use(AUthMiddleware)

router.post("/share",)

router.get("/:shareId",)

export default router