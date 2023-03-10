import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import xss from "xss-clean";

import userAuthRoute from "./routes/userAuthRoute";
import productsRoute from "./routes/productsRoute";

const app = express();

//* Secure Header HTTP
app.use(helmet());

//* Data Sanitation against site script XSS
app.use(xss());

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//? Routes
app.use(userAuthRoute);
app.use(productsRoute);

export default app;
