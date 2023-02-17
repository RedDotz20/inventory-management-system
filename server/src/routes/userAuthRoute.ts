import express, { Request, Response, NextFunction } from "express";
const router = express.Router();
import getUsersController from "../controllers/getAllUsers";
import loginController from "../controllers/userAuthService";

import authenticateToken from "../middleware/authToken";

router.get("/getAllUsers", getUsersController.getAllUsers);
router.post("/login", loginController.login);
router.post("/register", loginController.register);

router.get("/protected", authenticateToken, (req: Request, res: Response) => {
	res.send("You are authorized");
});

export default router;
