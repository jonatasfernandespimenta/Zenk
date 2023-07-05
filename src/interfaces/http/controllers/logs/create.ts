import makeCreateLogsUseCase from "@domain/logs/application/use-cases/factories/make-create-logs-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function createLog(req: FastifyRequest, res: FastifyReply) {
  const createLogBodySchema = z.object({
    source: z.string(),
    data: z.string(),
  });

  const { data, source } = createLogBodySchema.parse(req.body);

  const createLogUseCase = makeCreateLogsUseCase();

  await createLogUseCase.execute({ data, source });

  return res.status(201).send();
}
