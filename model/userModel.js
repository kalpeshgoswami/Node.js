import mongoose from "mongoose";

import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema(
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



userSchema.pre("save", async function () {

    const user = this
    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 10)
    }
})



userSchema.statics.findByCredential = async function (email, password) {

    try {

        const user = await this.findOne({ email });

        if (!user) {
            throw new Error("unable to login");
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            throw new Error("unable to login");
        }

        return user;

    } catch (error) {

        throw new Error(error.message);

    }

}

const userModel = mongoose.model("user", userSchema);

export default userModel; 