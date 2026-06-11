import mongoose from "mongoose";

const userShema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true
        },
        email: {
            type: String,
            trim: true,
            required: true
        },
        password: {
            type: String,
            trim: true,
            required: true,
            validation: (value) => {
                if (value.toLowerCase() === "password") {
                    throw new Error("password can't set as a password word")
                }
            }
        }
    },

    { timestamps: true },

);

const usermodel = mongoose.model("user", userShema);

export default usermodel;