import httpError from "../middleware/httpError.js";
import event from "../model/model.js";

const create = async((req, res, next) => {

    try {

        const { eventname, eventDate, eventDescription, eventVenue } = req.body;

        const eventImage = req.files?.eventImage?.map((file) => file.path || null);

        const eventPoster = req.files?.eventPoster?.[0].path || null;

        const eventBanner = req.files?.eventBanner?.[0].path || null;

        const eventSpeaker = req.files?.eventSpeaker?.map((file) => file.path || null);

        const eventDocuments = req.files?.eventDocuments?.map((file) => file.path || null);

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

})

export default create;