import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import xss from "xss-clean";
import hpp from "hpp";

import sequelize from "./config/connection";
import { associate } from "./models/associations";

import userAuthRoute from "./routes/userAuthRoute";
import productsRoute from "./routes/productsRoute";
import itemCodesRoute from "./routes/itemCodesRoute";

const app = express();

//* Secure Header HTTP
app.use(helmet());

//* Data Sanitation against site script XSS
app.use(xss());

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//* Protect against HTTP Parameter Pollution Attacks
app.use(hpp());

//? Sync Table Models
sequelize.sync();

//? Execite Sequelize Associations
associate(sequelize);

//? Routes
app.use(userAuthRoute);
app.use(productsRoute);
app.use(itemCodesRoute);

sequelize
	.sync()
	.then((result) => console.log(result.models))
	.catch((error) => console.error(error));

export default app;
