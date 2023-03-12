import { Request, Response } from "express";
import ProductCategory from "../../models/productCategory";

async function getProductCategory(req: Request, res: Response) {
	try {
		const category = await ProductCategory.findAll();
		res.status(200).json({ data: category });
		console.log("Product Category Loaded Successfully");
	} catch (err) {
		console.error(err);
		res.status(500).json({
			message: "An Error occurred while retrieving Product Units",
		});
	}
}

export default { getProductCategory };
