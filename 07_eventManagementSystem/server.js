import express from "express";

import httpError from "./middleware/httpError.js";

const app = express();

app.use(express.json());

app.get("/", (req, res, next) => {
    res.status(200).jason("hello from server")
});

app.get((error, req, res, next) => {
    if (res.headersSend) {
        return next(error);
    }

    res.status(error.statusCode || 500).json({
        message: error.message || "internal server error"
    })
});

const port = 5000;

app.listen(port, (err) => {
    if (err) {
        return console.log(err.message)
    }
    console.log(`server running port on ${port}`)
})