import express from "express";
import cors from "cors";
import { urlencoded } from "body-parser";
import { notFound, errorHandler } from "./middleware/index";
import { getUsers } from "./routes/users";

const app = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

//* Routes

app.use(getUsers);

app.get("/", (req, res) => {
	res.send("Hello world");
});

//! Error Handling
app.use(notFound);
app.use(errorHandler);

export default app;
