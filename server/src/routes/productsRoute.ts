import express from "express";
import productUnits from "../controllers/productsController/productUnit";
import productCategory from "../controllers/productsController/productCategory";
import products from "../controllers/productsController/products";

const router = express.Router();

//* Products Routes
router.get("/getproducts", products.getProducts);
router.post("/insertproduct", products.insertProducts);
router.get("/productnameASC", products.productNameASC);
router.get("/productnameDESC", products.productNameDESC);
router.get("/brandASC", products.productBrandASC);
router.get("/brandDESC", products.productBrandDESC);

//* Product Unit Routes
router.get("/getproductunits", productUnits.getProductUnits);
router.post("/addproductunit", productUnits.insertProductUnit);

//* Product Category Routes
router.get("/getproductcategory", productCategory.getProductCategory);
router.post("/insertproductcategory", productCategory.insertProductCategory);

export default router;
