import { check } from "express-validator";

export const validateEmployee = [
	check("username")
		.not()
		.isEmpty()
		.withMessage("Username is required")
		.isLength({ min: 5 })
		.withMessage("Username must be at least 5 characters long"),
	check("password")
		.not()
		.isEmpty()
		.withMessage("Password is required")
		.isLength({ min: 8 })
		.withMessage("Password must be at least 8 characters long")
];

export const signupValidation = [
	check("name", "Name is requied").not().isEmpty(),
	check("email", "Please include a valid email")
		.isEmail()
		.normalizeEmail({ gmail_remove_dots: true }),
	check("password", "Password must be 6 or more characters").isLength({
		min: 6
	})
];

export const loginValidation = [
	check("email", "Please include a valid email")
		.isEmail()
		.normalizeEmail({ gmail_remove_dots: true }),
	check("password", "Password must be 6 or more characters").isLength({
		min: 6
	})
];
