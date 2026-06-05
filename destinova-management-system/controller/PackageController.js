import httpError from "../middleware/HttpError.js"; 

import Packages from "../model/package.js";


const addPackage = async (req, res, next) => {

    try {

        const {
            packageName,
            packagePrice,
            packageDestination,
            startDate,
            endDate,
            duration
        } = req.body

        const packageImage = req.file?.path;


        const newPackage = new Packages({

            packageName,
            packagePrice,
            packageDestination,
            startDate,
            endDate,
            packageImage,
            duration
        })
        await newPackage.save();

        res.status(201).json({ success: true, message: "package Added Successfully", newPackage });

    } catch (error) {
        next(new HttpError(error.message, 500));
    }

}

export default { addPackage };