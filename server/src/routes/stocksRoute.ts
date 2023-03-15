import express from "express";
import stocks from "../controllers/stocksController/stocks";

const router = express.Router();

router.get("/getstocks", stocks.getStocks);

export default router;
