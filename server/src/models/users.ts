import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection";

interface UserAttributes {
	id?: number;
	username: string;
	password: string;
}

interface UserInstance extends Model<UserAttributes>, UserAttributes {}

const Users = sequelize.define<UserInstance>(
	"users",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
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

Users.sync({ alter: true })
	.then(() => console.log("Users model synced successfully"))
	.catch(() => console.error("Error syncing the Users model"));

export default Users;
