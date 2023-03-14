import { Request, Response } from "express";
import connection from "../../config/connection";

async function getProductUnits(req: Request, res: Response) {
	try {
		const query = `SELECT * FROM product_units`;
		await connection.execute(query, (error, result) => {
			if (error) throw error;
			res.status(200).json({ data: result });
			console.log("Product Units Loaded Successfully");
		});
	} catch (err) {
		console.error(err);
		res.status(500).json({
			message: "An Error occurred while retrieving Product Units",
		});
	}
}

export default { getProductUnits };
