import fastify from "fastify";
import { logRoutes } from "./controllers/logs/routes";
import { ZodError } from "zod";
import { env } from "src/env";

export const app = fastify();

app.register(logRoutes);

app.setErrorHandler((error, _, res) => {
  if (error instanceof ZodError) {
    return res.status(400).send({ message: "Validation Error", issues: error.format() });
  }

  if (env.NODE_ENV !== "prod") {
    console.log(error);
  }

  return res.status(500).send({ message: "Internal server error." });
});
