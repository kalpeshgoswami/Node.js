import express from "express";
import upload from "../middleware/upload.js";
import controller from "../controller/controller.js";

const router = express.Router();

router.post("/create", upload.fields([
    {
        name: "eventImage",
        maxCount: 5
    },
    {
        name: "eventPoster",
        maxCount: 1
    },
    {
        name: "eventBanner",
        maxCount: 1
    },
    {
        name: "eventSpeaker",
        maxCount: 3
    },
    {
        name: "eventDocuments",
        maxCount: 3
    },

    ]),

    controller.create
);

router.get("/getAllEvent", controller.getAllEvent);

export default router;