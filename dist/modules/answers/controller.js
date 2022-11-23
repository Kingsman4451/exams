import { InternalServerError } from "../../lib/errors.js";
import model from "./model.js";
const POST = async (req, res, next) => {
    try {
        const answer = await model.POST(req.params.testId, req.body, req.userId);
        return res.status(202).json({
            status: 202,
            message: "answer created",
            data: answer,
        });
    }
    catch (error) {
        const result = error.message;
        return next(new InternalServerError(500, result));
    }
};
export default {
    POST,
};
