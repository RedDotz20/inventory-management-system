import express, { Request, Response } from "express";
import productUnits from "../controllers/productsController/getProductUnits";

const router = express.Router();

router.get("/getproductunits", productUnits.getProductUnits);

export default router;
