const express = require("express");
const countryRouter = require("./routes/country");
const activityRouter = require("./routes/activity")
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use('/countries', countryRouter);
server.use('/activities', activityRouter)

module.exports = server;
