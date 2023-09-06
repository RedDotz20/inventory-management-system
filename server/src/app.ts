import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
// import xss from 'xss-clean';
import hpp from 'hpp';

import itemCodesRoute from './routes/itemCodesRoute';
import productsRoute from './routes/productsRoute';
import stocksRoute from './routes/stocksRoute';
import userAuthRoute from './routes/userAuthRoute';

const app = express();

//* Secure Header HTTP
app.use(helmet());

//* Data Sanitation against site script XSS
// app.use(xss());

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//* Protect against HTTP Parameter Pollution Attacks
app.use(hpp());

//? Routes
app.use(userAuthRoute);
// app.use(productsRoute);
// app.use(itemCodesRoute);
// app.use(stocksRoute);

export default app;
