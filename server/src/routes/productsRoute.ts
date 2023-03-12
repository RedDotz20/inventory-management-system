import express from "express";
import productUnits from "../controllers/productsController/getProductUnits";
import productCategory from "../controllers/productsController/getProductCategory";
import products from "../controllers/productsController/getAllProducts";

const router = express.Router();

router.get("/getproducts", products.getProducts);
router.get("/getproductunits", productUnits.getProductUnits);
router.get("/getproductcategory", productCategory.getProductCategory);

export default router;
