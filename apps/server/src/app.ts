import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
import { ItemCodes, Products, Stocks, UserAuth } from './routes';

const app = express();

app.use(cookieParser());

app.use(morgan('dev')); //* HTTP Request Logger
app.use(helmet()); //* Secure Header HTTP

app.use(cors({ credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(hpp()); //* Protect against HTTP Parameter Pollution Attacks

//? Routes
app.use(UserAuth);
app.use(Products);
app.use(ItemCodes);
app.use(Stocks);

export default app;
