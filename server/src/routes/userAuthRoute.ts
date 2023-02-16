import express from "express";
const router = express.Router();
import getUsersController from "../controllers/getAllUsers";
import loginController from "../controllers/userAuth";

router.get("/getAllUsers", getUsersController.getAllUsers);
router.post("/login", loginController.login);
router.post("/register", loginController.register);

export default router;
