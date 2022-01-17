import express from "express";
import logger from "morgan";
import helmet from "helmet";
import config from "./constants/server";

const app = express();
app.use(logger("dev"));
app.use(helmet());

app.listen(config.SERVER_PORT, () =>
  console.log(`Server running at http://127.0.0.1:${config.SERVER_PORT}/`)
);
