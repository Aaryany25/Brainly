import { Router } from "express";
import AUthMiddleware from "../Middleware/AuthMiddleware.js";
import { Addcontent,GetContent } from "../Controller/Notes.Controller.js";
const router=Router();

router.use(AUthMiddleware)
router.post("/add-content",Addcontent)
router.get("/get-content",GetContent)

export default router   