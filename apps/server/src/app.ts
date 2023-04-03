import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import xss from 'xss-clean';
import hpp from 'hpp';
import morgan from 'morgan';

import userAuthRoute from './routes/userAuthRoute';
import productsRoute from './routes/productsRoute';
import itemCodesRoute from './routes/itemCodesRoute';
import stocksRoute from './routes/stocksRoute';

const app = express();

app.use(morgan('dev')); //* HTTP Request Logger

app.use(helmet()); //* Secure Header HTTP
app.use(xss()); //* Data Sanitation against site script XSS

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(hpp()); //* Protect against HTTP Parameter Pollution Attacks

//? Routes
app.use(userAuthRoute);
app.use(productsRoute);
app.use(itemCodesRoute);
app.use(stocksRoute);

export default app;
