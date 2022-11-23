import { fetch, fetchAll } from "../../lib/postgres.js";
import { GETUNVERSITY, GETUNV } from "./query.js";

const GET = async (query: any, params: any) => {
  try {
    const { subject_1, subject_2, unversityId } = query;
    let data = await fetchAll(GETUNVERSITY);
    let unversity = await fetchAll(GETUNV, [unversityId as never]);
    let result: any[] = [];
    if (unversity.length > 0) {
      data = unversity;
    }

    if (subject_1 && subject_2) {
      data.map((item) => {
        item.faculties = item.faculties.filter((fac: any) => {
          return fac.subject_1 == subject_1 && fac.subject_2 == subject_2;
        });
        if (item.faculties.length > 0) {
          result.push(item);
        }
      });
      return result;
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default {
  GET,
};
