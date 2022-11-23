import { fetch } from "../../lib/postgres.js";
import { POSTANSWER, GETANSWER, UPDATAANSWER } from "./query.js";
const POST = async (testId, body, userId) => {
    try {
        const { answer, examId } = body;
        let record = await fetch(GETANSWER, [testId, examId]);
        if (record) {
            let data = await fetch(UPDATAANSWER, [
                record.answer_id,
                answer,
            ]);
            return data;
        }
        let data = await fetch(POSTANSWER, [
            userId,
            testId,
            answer,
            examId,
        ]);
        return data;
    }
    catch (error) { }
};
export default {
    POST,
};
