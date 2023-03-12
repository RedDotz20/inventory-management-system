import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection";

interface ProductAttributes extends Model {
	product_id?: number;
	name: string;
	brand: string;
	category_id: number;
	unit_id: number;
	price: number;
}

const Product = sequelize.define<ProductAttributes>(
	"products",
	{
		productId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
		brand: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
		categoryId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		unitId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		price: {
			type: DataTypes.DECIMAL(10, 2),
			allowNull: false,
		},
	},
	{
		tableName: "products",
		timestamps: false,
	}
);

export default Product;
