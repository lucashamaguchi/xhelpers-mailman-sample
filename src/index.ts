require("dotenv").config();

import { createServer } from "xhelpers-api/lib/server";
const pkgJson = require("../package.json");

let server: any = {};
async function start() {
  const options: any = {
    serverOptions: {
      port: process.env.PORT || 3100,
      host: process.env.HOST || "127.0.0.1",
    },
    options: {
      app_key_auth: process.env.MAILMAN_APP_KEY,
      swaggerOptions: {
        info: {
          title: pkgJson.name,
          version: pkgJson.version,
        },
        schemes: [process.env.SSL === "true" ? "https" : "http"],
        grouping: "tags",
      },
      routeOptions: {
        routes: "*/routes/*.route.js",
      },
    },
  };
  server = await createServer(options);
  await server.start();
}
start();
