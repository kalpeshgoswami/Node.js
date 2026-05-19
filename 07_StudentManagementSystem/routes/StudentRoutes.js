import express from "express";

import studentControllers from "../controller/studentController.js";

const router = express.Router();

router.post("/add", studentControllers.AddStudent);

router.get("/getAllStudents", studentControllers.getAllStudent);

router.get("/:id", studentControllers.studentById);

router.delete("/:id",studentControllers.deleteById);

export default router;