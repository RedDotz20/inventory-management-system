import { DataTypes } from "sequelize";
import sequelize from "../config/connection";
import UnitInstance from "../interfaces/productUnitInterface";

const ProductUnit = sequelize.define<UnitInstance>(
	"product_unit",
	{
		unit_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		unit_name: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
	},
	{
		tableName: "product_unit",
		timestamps: false,
	}
);

ProductUnit.sync({ alter: true })
	.then(() => console.log("ProductUnit model synced successfully"))
	.catch(() => console.error("Error syncing the ProductUnit model"));

export default ProductUnit;
