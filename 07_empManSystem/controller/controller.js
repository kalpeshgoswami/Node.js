import httpError from "../middleware/httpError.js";
import Employee from "../model/model.js";

const add = async (req, res, next) => {


    try {

        const { name, emp_Id, PhoneNumber, salary, email } = req.body;

        const NewEmployee = new Employee({ name, emp_Id, PhoneNumber, salary, email });

        await NewEmployee.save();

        res.status(201).json({ success: true, message: "Employee added", NewEmployee })

    } catch (error) {

        next(new httpError(error.message, 500));    

    }

}

export default { add };