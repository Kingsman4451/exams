import { fetchAll } from "../../lib/postgres.js";
import { GETREGIONS } from "./query.js";
const GET = async () => {
    try {
        return await fetchAll(GETREGIONS);
    }
    catch (error) { }
};
export default {
    GET,
};
