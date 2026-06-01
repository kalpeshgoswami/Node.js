import httpError from "../middleware/httpError.js";
import event from "../model/model.js"

const create = async (req, res, next) => {
    console.log("Create API Hit");
    try {

        const { eventname, eventDate, eventDescription, eventVenue } = req.body;

        const eventImage = req.files?.eventImage?.map((file) => file.path) || null;

        const eventPoster = req.files?.eventPoster[0]?.path || null;

        const eventBanner = req.files?.eventBanner[0]?.path || null;

        const eventSpeaker = req.files?.eventSpeaker?.map((file) => file.path) || null;

        const eventDocuments = req.files?.eventDocuments?.map((file) => file.path) || null;

        if (!eventDate) {
            return next(new httpError("event date is required", 404));
        }


        const newEvent = await new event({
            eventname, eventDate, eventDescription, eventImage, eventPoster, eventBanner, eventSpeaker, eventVenue, eventDocuments
        });

        await newEvent.save();

        res.status(201).json({ success: true, message: "New Event Added Successfully" });


    } catch (error) {

        console.log(error.message)

    }

}


const getAllEvent = async (req, res, next) => {
    try {
        const events = await event.find();

        if (events.length === 0)

            return res.status(404).json({
                success: true, message: "event data is not found"
            });

        res.status(200).json({
            success: true, message: "event date found"
        })
        {

        }
    } catch (error) {
        return next(new httpError("route not found", 404));
    }
};



export default { create, getAllEvent };