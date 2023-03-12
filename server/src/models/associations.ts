import { Sequelize } from "sequelize";

//* Product Models
import Product from "./products";
import ProductCategory from "./productCategory";
import ProductUnit from "./productUnit";

//* Items Code MOdels
import ItemCodes from "./itemCodes";
import ProductItemCode from "./productItemCode";

export function associate(sequelize: Sequelize) {
	//? One to One Relationship ( product <-> product_category )
	Product.hasOne(ProductCategory, { foreignKey: "categoryId" });
	ProductCategory.belongsTo(Product, { foreignKey: "categoryId" });

	//? One to One Relationship ( product <-> product_unit )
	Product.hasOne(ProductUnit, { foreignKey: "unitId" });
	ProductUnit.belongsTo(Product, { foreignKey: "unitId" });

	//? One to One Relationship ( product <-> product_item_code )
	Product.hasOne(ProductItemCode, { foreignKey: "productId" });
	ProductItemCode.belongsTo(ProductItemCode, { foreignKey: "productId" });

	//? One to Many Relationship ( product_item_code <-> item_codes )
	ProductItemCode.hasMany(ItemCodes, { foreignKey: "itemCodeId" });
	ItemCodes.belongsTo(ProductItemCode, { foreignKey: "itemCodeId" });
}
