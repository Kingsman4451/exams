import { AuthorizationError, InternalServerError } from "../../lib/errors.js";
import jwt from "../../lib/jwt.js";
import model from "./model.js";
const SIGNIN = async (req, res, next) => {
    try {
        const user = await model.SIGNIN(req.body);
        if (!user) {
            return next(new AuthorizationError(401, "Invalid username or password"));
        }
        res.status(200).send({
            statusCode: 200,
            message: "ok",
            user: {
                userId: user.user_id,
                fullname: user.fullname,
                username: user.username,
                contact: user.contact,
                region: user.region,
                gender: user.gender,
                token: jwt.sign({ userId: user.user_id }),
            },
        });
    }
    catch (error) {
        const result = error.message;
        return next(new InternalServerError(500, result));
    }
};
const SIGNUP = async (req, res, next) => {
    try {
        const newUser = await model.SIGNUP(req.body);
        if (!newUser) {
            return next(new AuthorizationError(401, "user already signed up"));
        }
        res.status(202).send({
            statusCode: 202,
            message: "new user added",
            user: {
                userId: newUser.user_id,
                fullname: newUser.fullname,
                username: newUser.username,
                contact: newUser.contact,
                region: newUser.region,
                gender: newUser.gender,
                token: jwt.sign({ userId: newUser.user_id }),
            },
        });
    }
    catch (error) {
        const result = error.message;
        return next(new InternalServerError(500, result));
    }
};
export default {
    SIGNIN,
    SIGNUP,
};
