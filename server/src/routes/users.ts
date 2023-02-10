import express from "express";
import controller from "../controllers/users";
import extractJWT from "../middleware/extractJWT";

const router = express.Router();

router.get("/validate", extractJWT, controller.validateToken);
router.post("/register", controller.register);
router.post("/login", controller.login);
router.get("/get/all", controller.getAllUsers);

// import con from "../connection";

// export const getUsers = express.Router();
// export const verifyUser = express.Router();
// export const authenticateUser = express.Router();

// getUsers.get("/users", (req, res) => {
// 	con.query("SELECT * FROM users", (err, data) => {
// 		if (err) throw err;
// 		console.log("users loaded successfully");
// 		res.send(data);
// 		res.end();
// 	});
// });

// verifyUser.get("/verifyUser:value", (req, res) => {
// 	const user = req.params.value;
// 	const query = `SELECT * FROM users WHERE user_id=${user}`;

// 	con.query(query, (error, results) => {
// 		if (error) return res.send({ error });
// 		console.log("sending for verification");
// 	});
// });
