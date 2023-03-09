import { Model } from "sequelize";

interface CategoryAttributes {
	category_id?: number;
	category_name: string;
}

interface CategoryInstance
	extends Model<CategoryAttributes>,
		CategoryAttributes {}

export default CategoryInstance;
