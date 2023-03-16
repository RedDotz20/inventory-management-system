import axios from "axios";
import { SERVER_URL } from "../config/config";

export default async function getProducts() {
	return await axios
		.get(`${SERVER_URL}/getproducts`)
		.then((res) => res.data.product)
		.catch((err) => console.error(err));
}
