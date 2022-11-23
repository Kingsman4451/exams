import { fetch, fetchAll } from "../../lib/postgres.js";
import { POSTANSWER, GETANSWER, UPDATAANSWER } from "./query.js";

const POST = async (testId: string, body: any, userId: string) => {
  try {
    const { answer, examId } = body;

    let record = await fetch(GETANSWER, [testId as never, examId as never]);

    if (record) {
      let data = await fetch(UPDATAANSWER, [
        record.answer_id as never,
        answer as never,
      ]);
      return data;
    }
    let data = await fetch(POSTANSWER, [
      userId as never,
      testId as never,
      answer as never,
      examId as never,
    ]);
    return data;
  } catch (error) {}
};

export default {
  POST,
};
