import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection";

interface ItemCodeAttributes extends Model {
	item_code_id: number;
	item_code: string;
}

const ItemCodes = sequelize.define<ItemCodeAttributes>(
	"item_codes",
	{
		itemCodeId: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		itemCode: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
	},
	{
		tableName: "item_codes",
		timestamps: false,
	}
);

export default ItemCodes;
