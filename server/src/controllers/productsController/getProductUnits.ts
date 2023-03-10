import { Request, Response } from "express";
import ProductUnit from "../../models/productUnit";

async function getProductUnits(req: Request, res: Response) {
	try {
		const units = await ProductUnit.findAll();
		res.status(200).json({ data: units });
		console.log("Product Units Loaded Successfully");
	} catch (err) {
		console.error(err);
		res.status(500).json({
			message: "An Error occurred while retrieving Product Units",
		});
	}
}

export default { getProductUnits };
