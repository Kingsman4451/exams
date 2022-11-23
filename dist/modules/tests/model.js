import { fetchAll } from "../../lib/postgres.js";
import { GETTEST } from "./query.js";
const GET = async (query) => {
    try {
        const { subject_1, subject_2 } = query;
        let data = await fetchAll(GETTEST, [
            subject_1,
            subject_2,
        ]);
        return data;
    }
    catch (error) { }
};
export default {
    GET,
};
