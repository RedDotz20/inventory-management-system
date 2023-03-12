import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection";

interface ProdItemCodeAttr extends Model {
	item_code_id: number;
	product_id: number;
}

const ProductItemCode = sequelize.define<ProdItemCodeAttr>(
	"product_item_code",
	{
		itemCodeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		productId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		tableName: "product_item_code",
		timestamps: false,
	}
);

export default ProductItemCode;
