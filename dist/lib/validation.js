import Joi from "joi";
export const loginSchema = Joi.object({
    username: Joi.string().min(3).max(32).required(),
    password: Joi.string().required(),
});
export const registerSchema = Joi.object({
    fullname: Joi.string().min(5).max(96).required(),
    contact: Joi.string()
        .regex(/^998[389][0123456789][0-9]{7}$/)
        .required(),
    username: Joi.string().min(3).max(32).required(),
    password: Joi.string().required(),
    region: Joi.number().required(),
    gender: Joi.string().valid("male", "female").required(),
});
export const examCreateSchema = Joi.object({
    subject_1: Joi.number().required(),
    subject_2: Joi.number().required(),
    unversityId: Joi.number().required(),
    facultyId: Joi.number().required(),
});
export const answerCreateScheme = Joi.object({
    body: {
        examId: Joi.number().required(),
        answer: Joi.string().required(),
    },
    params: {
        testId: Joi.number().required(),
    },
});
// export const subcategorySchema = Joi.object({
//   subcategoryName: Joi.string().required(),
//   categoryId: Joi.number().required()
// })
// export const eventSchema = Joi.object({
//   date:Joi.date().greater('now').required(),
//   time: Joi.string().max(5).required(),
//   categoryId: Joi.number().required(),
//   subcategoryId: Joi.number().required(),
//   eventType: Joi.any().valid('online', 'offline').required(),
//   eventLink: Joi.string(),
//   organizerType:Joi.any().valid('legal', 'physical').required(),
//   legalName: Joi.string(),
//   fullname: Joi.string().max(64).required(),
//   proffesion: Joi.string().required(),
//   contact: Joi.string().pattern(new RegExp(/^998[389][0123456789][0-9]{7}$/)).required(),
//   extraContact: Joi.string().pattern(new RegExp(/^998[389][0123456789][0-9]{7}$/)).required(),
//   title: Joi.string().required(),
//   description: Joi.string().required(),
//   body: Joi.string().required(),
//   imge: Joi.string().pattern(new RegExp(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i))
// })
// export const eventStatusSchema = Joi.object({
//   params:{
//     status: Joi.any().valid('active', 'pending', 'rejected').required(),
//   }
// })
/^998[389][0123456789][0-9]{7}$/ ||
    /^[A-Za-z0-9._+%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$/;
