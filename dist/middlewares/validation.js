import { loginSchema, registerSchema, examCreateSchema, answerCreateScheme, } from "../lib/validation.js";
import { ValidationError } from "../lib/errors.js";
export default (req, res, next) => {
    try {
        if (req.method == "POST" && req.url == "/signin") {
            let { error } = loginSchema.validate(req.body);
            if (error)
                throw error;
        }
        if (req.method == "POST" && req.url == "/signup") {
            let { error } = registerSchema.validate(req.body);
            if (error)
                throw error;
        }
        if (req.method == "POST" && req.url == "/exams") {
            let { error } = examCreateSchema.validate(req.body);
            if (error)
                throw error;
        }
        if (req.method == "POST" && req.url == `/answers/${req.params.testId}`) {
            let { error } = answerCreateScheme.validate({
                params: req.params,
                body: req.body,
            });
            if (error)
                throw error;
        }
        // if(req.method == 'POST' && req.url == '/admin/categories'){
        //   let {error} = categorySchema.validate(req.body)
        //   if(error) throw error
        // }
        // if(req.method == 'POST' && req.url == '/admin/subcategories'){
        //   let {error} = subcategorySchema.validate(req.body)
        //   if(error) throw error
        // }
        // if(req.method == 'POST' && req.url == '/events'){
        //   let {error} = eventSchema.validate(req.body)
        //   if(error) throw error
        // }
        // if(req.method == 'GET' && req.url == `/admin/events/${req.params.status}`){
        //   let {error} = eventStatusSchema.validate({params: req.params})
        //   if(error) throw error
        // }
        return next();
    }
    catch (error) {
        const result = error.message;
        return next(new ValidationError(401, result));
    }
};
