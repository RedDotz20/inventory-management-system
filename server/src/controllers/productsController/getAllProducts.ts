import { Request, Response } from "express";
import Product from "../../models/products";

async function getProducts(req: Request, res: Response) {
	try {
		const products = await Product.findAll({ logging: false });
		res.status(200).json({ data: products });
		console.log("Products Loaded Successfully");
	} catch (err) {
		console.error(err);
		res.status(500).json({
			message: "An Error occurred while retrieving Products",
		});
	}
}

export default { getProducts };
