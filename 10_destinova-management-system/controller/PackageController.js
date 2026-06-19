import httpError from "../middleware/HttpError.js";

import Packages from "../model/package.js";

// add package

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

// all package

const getAllPackage = async (req, res, next) => {

    try {
        const packages = await Packages.find();

        if (packages.length === 0)

            return res.status(404).json({
                success: true, message: "package data is not found"
            });

        res.status(200).json({
            success: true, message: "package data is found", packages
        })

    } catch (error) {
        return next(new httpError("route not found", 404)
        )
    }
};

// find by id

const getById = async (req, res, next) => {

    try {

        const { id } = req.params;

        const packages = await Packages.findById(id);

        if (!packages) {
            return next(new httpError("package data is not found", 404))
        }

        res.status(200).json({
            success: true, message: "package data is found", packages
        })

    } catch (error) {
        next(new httpError(error.message, 500))
    }

}



export default { addPackage, getAllPackage, getById };