import express from "express";

import controller from "../controller/controller.js";
import Employee from "../model/model.js";

const router = express.Router();

router.post("/add", controller.add);

export default router;