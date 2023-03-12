import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection";

interface UserAttributes extends Model {
	id: number;
	username: string;
	password: string;
}

// interface UserInstance extends Model<UserAttributes>, UserAttributes {}

const Users = sequelize.define<UserAttributes>(
	"users",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
			unique: true,
		},
		username: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
	},
	{
		tableName: "users",
		timestamps: false,
	}
);

export default Users;
