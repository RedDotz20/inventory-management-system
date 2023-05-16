import express from 'express';
import products from '../controllers/productsController/products';

const router = express.Router();

//* Products Routes
router.get('/getproducts', products.getProducts);
router.post('/insertproduct', products.insertProducts);
router.delete('/deleteproduct/', products.deleteProducts);
router.put('/editproduct', products.editProducts);

export default router;

//! ------------------------

// import productCategory from '../controllers/productsController/productCategory';
// import productUnits from '../controllers/productsController/productUnit';

//* Product Unit Routes
// router.get('/getproductunits', productUnits.getProductUnits);
// router.post('/addproductunit', productUnits.insertProductUnit);

//* Product Category Routes
// router.get('/getproductcategory', productCategory.getProductCategory);
// router.post('/insertproductcategory', productCategory.insertProductCategory);
