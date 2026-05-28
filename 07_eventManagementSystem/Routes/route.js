import express from "express";
import upload from "../middleware/upload";

const router = express.Router();

router.post("/Create", upload.fields)([
    {
        name: "eventImage",
        mexCount: 5
    },
    {
        name: "eventPoster",
        mexCount: 1
    },
    {
        name: "eventBanner",
        mexCountt: 1
    },
    {
        name: "eventSpeaker",
        mexCount: 3
    },
    {
        name: "eventDocuments",
        mexCount: 3
    },

    eventController.Create
]);

export default router;