import httpError from "../middleware/HttpError.js";
import student from "../model/studentModel.js";

async function AddStudent(req, res, next) {

    try {

        const { name, GRid, email, course, PhoneNumber } = req.body;

        const NewStudent = await new student({
            name, GRid, email, course, PhoneNumber
        });

        await NewStudent.save();

        res.status(201).json({ success: true, message: "student added", NewStudent });

    } catch (error) {

        next(new httpError(error.message, 500));

    }
}


async function getAllStudent(req, res, next) {
    try {
        const AllStudentsData = await student.find();

        if (AllStudentsData.length <= 0) {
            res.status(404).json({ success: true, message: "student data is not found" });
        }

        res
            .status(200)
            .json({
                success: true,
                message: "student data found",
                total: AllStudentsData.length,
                AllStudentsData,
            });
    }
    catch (error) {
        next(new httpError(error.message, 500))
    }
}
export default { AddStudent, getAllStudent };
