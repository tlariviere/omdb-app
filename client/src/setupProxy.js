/* eslint-disable */
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: `http://localhost:${process.env.SERVER_PORT ?? 8080}`,
      changeOrigin: true,
    })
  );
};
