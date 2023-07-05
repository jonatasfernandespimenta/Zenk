import { FastifyInstance } from "fastify";
import { listLogs } from "./list";
import { createLog } from "./create";

export async function logRoutes(app: FastifyInstance) {
  app.get("/logs", listLogs);
  app.post("/logs", createLog);
}
