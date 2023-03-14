import { Request, Response } from "express";
import connection from "../../config/connection";

async function getProducts(req: Request, res: Response) {
	try {
		const products = await connection.execute("SELECT * FROM products");
		res.status(200).json({ data: products });
		console.log("Products Loaded Successfully");
	} catch (err) {
		console.error(err);
		res.status(500).json({
			message: "An Error occurred while retrieving Products",
		});
	}
}

async function insertProducts(req: Request, res: Response) {
	try {
		const { productName, brand, categoryId, unitId, price } = req.body;
		const query = `INSERT INTO products (productName, brand, price, categoryId, unitId) VALUES(?,?,?,?,?)`;

		await connection.execute(
			query,
			[...req.body],
			(error: any, result: any) => {
				if (error) throw error;
				res.status(201).json({ message: "New Product Added", result });
				console.log("Product Loaded Successfully");
			}
		);
	} catch (err) {
		console.error(err);
		res.status(500).json({
			message: "An Error occurred while retrieving Products",
		});
	}
}

export default { getProducts, insertProducts };
