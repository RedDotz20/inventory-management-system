import { Request, Response } from "express";
import ProductItemCode from "../../models/productItemCode";

async function getProductItemCode(req: Request, res: Response) {
	try {
		const prdItmCode = await ProductItemCode.findAll({ logging: false });
		res.status(200).json({ data: prdItmCode });
		console.log("Product Item Codes Loaded Successfully");
	} catch (err) {
		console.error(err);
		res.status(500).json({
			message: "An Error occurred while retrieving Product Item Codes",
		});
	}
}

export default { getProductItemCode };
