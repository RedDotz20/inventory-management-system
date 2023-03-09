import { DataTypes } from "sequelize";
import sequelize from "../config/connection";
import CategoryInstance from "../interfaces/productCategoryInterface";

const ProductCategory = sequelize.define<CategoryInstance>(
	"product_category",
	{
		category_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		category_name: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
	},
	{
		tableName: "product_category",
		timestamps: false,
	}
);

ProductCategory.sync({ alter: true })
	.then(() => console.log("ProductCategory model synced successfully"))
	.catch(() => console.error("Error syncing the ProductCategory model"));

export default ProductCategory;
