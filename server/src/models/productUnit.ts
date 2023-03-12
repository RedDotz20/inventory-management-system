import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection";

interface UnitAttributes extends Model {
	unit_id: number;
	unit_name: string;
}

const ProductUnit = sequelize.define<UnitAttributes>(
	"product_unit",
	{
		unitId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		unitName: {
			type: DataTypes.STRING(40),
			allowNull: false,
		},
	},
	{
		tableName: "product_unit",
		timestamps: false,
	}
);

// ProductUnit.sync();

export default ProductUnit;
