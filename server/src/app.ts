import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";

import userAuthRoute from "./routes/userAuthRoute";
import productsRoute from "./routes/productsRoute";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(userAuthRoute);
app.use(productsRoute);

export default app;
