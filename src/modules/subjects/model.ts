import { ForbiddenError } from "../../lib/errors.js";
import { fetch, fetchAll } from "../../lib/postgres.js";
import { GETSUBJECTS, GETSUB, GETMAIN } from "./query.js";

const GET = async () => {
  try {
    return await fetchAll(GETSUBJECTS);
  } catch (error) {}
};

const GETSECOND = async (param: any) => {
  try {
    let data = await fetchAll(GETSUB);
    let subject = await fetch(GETMAIN, [param.first as never]);
    if (subject) {
      if (subject.subject == "Matematika") {
        data = data.filter((item) => {
          return item.subject == "Fizika" || item.subject == "Ingliz tili";
        });
      }
      if (subject.subject == "Kimyo") {
        data = data.filter((item) => {
          return item.subject == "Biologiya";
        });
      }
      return data;
    }
  } catch (error) {}
};

export default {
  GET,
  GETSECOND,
};
