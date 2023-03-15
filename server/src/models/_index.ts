import connection from "../config/connection";
import path from "path";
import fs from "fs";

const createTables = async (): Promise<void> => {
	try {
		const createModel = (schema: string) => {
			const filepath = path.join(__dirname, schema);
			return fs.readFileSync(filepath, "utf8");
		};

		const users = createModel("users.sql");
		const productUnit = createModel("productUnit.sql");
		const productCategory = createModel("productCategory.sql");
		const products = createModel("products.sql");

		await connection.execute(users);
		await connection.execute(productUnit);
		await connection.execute(productCategory);
		await connection.execute(products);

		console.log(`Tables Sucessfully Created`);
	} catch (err) {
		console.error(`Error executing SQL file:`, err);
	}
};

export default createTables;
