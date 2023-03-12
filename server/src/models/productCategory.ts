import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection";

interface CategoryAttributes extends Model {
	category_id: number;
	category_name: string;
}

const ProductCategory = sequelize.define<CategoryAttributes>(
	"product_category",
	{
		categoryId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		categoryName: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
	},
	{
		tableName: "product_category",
		timestamps: false,
	}
);

export default ProductCategory;
