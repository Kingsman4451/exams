import { fetch, fetchAll } from "../../lib/postgres.js";
import { GETTEST, UPDATAANSWER } from "./query.js";

const GET = async (query: any) => {
  try {
    const { subject_1, subject_2 } = query;
    let data = await fetchAll(GETTEST, [
      subject_1 as never,
      subject_2 as never,
    ]);

    return data;
  } catch (error) {}
};

export default {
  GET,
};
