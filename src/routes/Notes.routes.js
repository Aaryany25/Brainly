import { Router } from "express";
import AUthMiddleware from "../Middleware/AuthMiddleware.js";
const router=Router();

router.use(AUthMiddleware)
router.post("/Create-note",CreateNote)
router.get("/get-notes",GetNotes)
router.put("/update-note",UpdateNote)
router.delete("/delete-note",DeleteNote)
router.patch("/share",ShareNote)
export default router