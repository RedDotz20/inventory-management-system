const express = require("express");
const { notFound, errorHandler } = require("./middleware/index");
const { urlencoded } = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

//* Routes

//! Error Handling
app.use(notFound);
app.use(errorHandler);

module.exports = app;
