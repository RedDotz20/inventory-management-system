import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import loginAuth from "./routes/userAuthRoute";

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(loginAuth);

export default app;
