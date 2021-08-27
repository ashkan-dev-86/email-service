const express = require("express");
const cookieParser = require("cookie-parser");
const appRouter = require("./routers/app.router");
const emailRouter = require("./routers/email.router");
const serviceEnums = require("./enums/service.enum");
const cors = require("cors");

const app = express();
const corsConfig = {
  origin: true,
  credentials: true,
};
app.use(cors(corsConfig));
app.options("*", cors(corsConfig));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use("/", appRouter);
app.use("/email", emailRouter);

const port = process.env.PORT || 1049;
app.listen(port, () => console.log(`${serviceEnums.SERVER_CONNECT} ${port}`));