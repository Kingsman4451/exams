import authRouter from "./auth/router.js";
import regionRouter from "./regions/router.js";
import unversityRouter from "./unversities/router.js";
import subjectRouter from "./subjects/router.js";
import examRouter from "./exams/router.js";
import answerRouter from "./answers/router.js";
import testRouter from "./tests/router.js";
import usersRouter from "./users/router.js";

export default [
  authRouter,
  regionRouter,
  unversityRouter,
  subjectRouter,
  examRouter,
  answerRouter,
  testRouter,
  usersRouter,
];
