

import express from "express"
import httpError from "../middleware/httpError.js";

import usermodel from "../model/userModel.js";

const add = async (req, res, next) => {

    try {

        const { name, email, password } = req.body;

        const newUser = new usermodel({
            name, email, password
        });

        await newUser.save();

        res.status(201).json({ sccess: true, message: "new user add successfully", newUser })

    } catch (error) {
        next(new httpError(error.message, 500))
    }

}

export default { add }