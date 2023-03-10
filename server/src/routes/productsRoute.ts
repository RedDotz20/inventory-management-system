import express, { Request, Response } from "express";
import productUnits from "../controllers/productsController/getProductUnits";
import productCategory from "../controllers/productsController/getProductCategory";

const router = express.Router();

router.get("/getproductunits", productUnits.getProductUnits);
router.get("/getproductcategory", productCategory.getProductCategory);

export default router;
