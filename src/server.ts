import { PORT } from "./config.js";
import cors from "cors";
import express, { Express } from "express";
import modules from "./modules/index.js";
import handleError from "./middlewares/handleError.js";

const app: Express = express();
app.use(cors());
app.use(express.json());
app.use(modules);

app.use(handleError);
app.listen(PORT, () => console.log("server ready at http://localhost:" + PORT));
