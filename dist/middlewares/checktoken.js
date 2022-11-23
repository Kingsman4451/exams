import { ForbiddenError } from "../lib/errors.js";
import customjwt from "../lib/jwt.js";
export default (req, res, next) => {
    try {
        let { token } = req.headers;
        if (!token) {
            return next(new ForbiddenError(403, "token required"));
        }
        const { userId } = customjwt.verify(token);
        req.userId = userId;
        return next();
    }
    catch (error) {
        const result = error.message;
        return next(new ForbiddenError(403, result));
    }
};
