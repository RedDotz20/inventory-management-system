import express from 'express';
import itemCodes from '../controllers/itemCodeController/itemCodes';

const router = express.Router();

router.get('/getItemCodes', itemCodes.getItemCodes);

export default router;
