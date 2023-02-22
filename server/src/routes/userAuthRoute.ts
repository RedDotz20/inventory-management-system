import express, { Request, Response } from "express";
import getUsersController from "../controllers/getAllUsers";
import loginController from "../controllers/userAuthService";
import verifyJWT from "../middleware/authToken";

const router = express.Router();

router.get("/getAllUsers", getUsersController.getAllUsers);
router.post("/login", loginController.login);
router.post("/logout", loginController.logout);
router.post("/register", loginController.register);

router.get("/protected", verifyJWT, (req: Request, res: Response) => {
	res.send("You are authorized and authenticated");
});

export default router;
