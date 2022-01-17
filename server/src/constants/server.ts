import integerOr from "../utils/integerOr";

const config = {
  SERVER_PORT: integerOr(process.env.SERVER_PORT, 8080),
};

export default config;
