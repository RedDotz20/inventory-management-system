import express from 'express';
import orders from '../controllers/orderController/orders';

const router = express.Router();

router.get('/getProductListOrder', orders.getProductListOrder);

export default router;
