import { Request, Response } from "express";
import connection from "../../config/connection";

async function insertProductCategory(req: Request, res: Response) {
	try {
		const { categoryName } = req.body;
		const query = `INSERT INTO product_category(categoryName) VALUES(?)`;

		await connection.execute(query, [categoryName], (error, result) => {
			if (error) throw error;
			res.status(201).json({ result });
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({
			message: "An Error occurred while retrieving Product Category",
		});
	}
}

async function getProductCategory(req: Request, res: Response) {
	try {
		const query = `SELECT * FROM product_category`;
		await connection.execute(query, (error, result) => {
			if (error) throw error;
			res.status(200).json({ data: result });
			console.log("Product Category Loaded Successfully");
		});
	} catch (err) {
		console.error(err);
		res.status(500).json({
			message: "An Error occurred while retrieving Product Category",
		});
	}
}

export default { getProductCategory, insertProductCategory };
