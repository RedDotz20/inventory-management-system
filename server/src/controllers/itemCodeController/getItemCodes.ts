import { Request, Response } from "express";
import ItemCode from "../../models/itemCodes";

async function getItemCodes(req: Request, res: Response) {
	try {
		const codes = await ItemCode.findAll({ logging: false });
		res.status(200).json({ data: codes });
		console.log("Item Codes Loaded Successfully");
	} catch (err) {
		console.error(err);
		res.status(500).json({
			message: "An Error occurred while retrieving Item Codes",
		});
	}
}

export default { getItemCodes };
