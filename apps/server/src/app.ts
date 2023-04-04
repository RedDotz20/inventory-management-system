import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import xss from 'xss-clean';
import hpp from 'hpp';
import morgan from 'morgan';

import { ItemCodes, Products, Stocks, UserAuth } from './routes';

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
app.use(UserAuth);
app.use(Products);
app.use(ItemCodes);
app.use(Stocks);

export default app;
