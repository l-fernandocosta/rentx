import express from "express";
import { router } from "./routes";
import swagger from "swagger-ui-express";
import swaggerJson from "./swagger.json";

const app = express();

app.use(express.json());
app.use(router);
app.use("/api-docs", swagger.serve, swagger.setup(swaggerJson));

app.listen(3333, () => {
  console.log("Server online 🚀");
});
