import { InternalServerError } from "../../lib/errors.js";
import model from "./model.js";
const GET = async (req, res, next) => {
    try {
        const tests = await model.GET(req.query);
        return res.status(200).json({
            status: 200,
            message: "ok",
            data: tests,
        });
    }
    catch (error) {
        const result = error.message;
        return next(new InternalServerError(500, result));
    }
};
export default {
    GET,
};
