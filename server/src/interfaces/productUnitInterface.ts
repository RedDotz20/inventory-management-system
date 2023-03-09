import { Model } from "sequelize";

interface UnitAttributes {
	unit_id?: number;
	unit_name: string;
}

interface UnitInstance extends Model<UnitAttributes>, UnitAttributes {}

export default UnitInstance;
