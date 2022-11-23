import { InternalServerError } from "../../lib/errors.js";
import model from "./model.js";
const POST = async (req, res, next) => {
    try {
        const exam = await model.POST(req.body, req.userId);
        return res.status(202).json({
            status: 202,
            message: "exam created",
            data: exam,
        });
    }
    catch (error) {
        const result = error.message;
        return next(new InternalServerError(500, result));
    }
};
const GETEXAMS = async (req, res, next) => {
    try {
        const exams = await model.GETEXAMS();
        return res.status(200).json({
            status: 200,
            message: "ok",
            data: exams,
        });
    }
    catch (error) {
        const result = error.message;
        return next(new InternalServerError(500, result));
    }
};
const GET = async (req, res, next) => {
    try {
        const exam = await model.GET(req.params);
        return res.status(200).json({
            status: 200,
            message: "ok",
            data: exam,
        });
    }
    catch (error) {
        const result = error.message;
        return next(new InternalServerError(500, result));
    }
};
export default {
    POST,
    GET,
    GETEXAMS,
};
