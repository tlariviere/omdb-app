import path from "path";
import express from "express";
import logger from "morgan";
import helmet from "helmet";
import config from "./constants/server";

const app = express();
app.use(logger("dev"));
app.use(helmet());

if (process.env.NODE_ENV === "production") {
  const pages = ["/movie/:token", "/search"];
  app.get(pages, (req, res, next) => {
    req.url = "/"; // react-router requires to serve index.html on any valid page route.
    next();
  });

  app.get("/*", express.static(path.join(__dirname, "public")));
}

app.listen(config.SERVER_PORT, () =>
  console.log(`Server running at http://127.0.0.1:${config.SERVER_PORT}/`)
);
