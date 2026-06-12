

import express from "express"
import httpError from "../middleware/httpError.js";

import userModel from "../model/userModel.js";

const add = async (req, res, next) => {

    try {

        const { name, email, password } = req.body;

        const newUser = new userModel({
            name, email, password
        });

        await newUser.save();

        res.status(201).json({ sccess: true, message: "new user add successfully", newUser })

    } catch (error) {
        next(new httpError(error.message, 500))
    }

}


const getAll = async (req, res, next) => {

    try {

        const userDetail = await userModel.find();

        if (userDetail.length === 0) {
            return next(new httpError("use data is not found", 404))
        }

        res.status(200).json({ success: true, message: "user data is found", total: userDetail.length, userDetail });

    } catch (error) {
        next(new httpError(error.message));
    }
};



const login = async (req, res, nect) => {

    try {

        const { email, password } = req.body;

        const users = await userModel.findByCredential(email, password);

        if (!users) {
            return next(new httpError("unabel ro login", 400));
        }

        res.status(200).json({ success: true, message: "user login succesfull", users });

    } catch (error) {
        next(new httpError(error.message, 500));
    }
}

export default { add, getAll, login }