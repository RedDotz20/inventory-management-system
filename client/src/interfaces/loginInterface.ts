import { FieldValues } from "react-hook-form";

interface loginInterface {
	username: string;
	password: string;
}

type loginTypes = loginInterface | FieldValues;

export default loginTypes;
