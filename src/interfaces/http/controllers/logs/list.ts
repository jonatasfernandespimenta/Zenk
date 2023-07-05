import makeListLogsUseCase from "@domain/logs/application/use-cases/factories/make-list-logs-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function listLogs(req: FastifyRequest, res: FastifyReply) {
  const listLogQuerySchema = z.object({
    page: z.coerce.number().min(1).default(1),
    source: z.string().optional(),
  });

  const { page, source } = listLogQuerySchema.parse(req.query);

  const listLogsUseCase = makeListLogsUseCase();

  const { data } = await listLogsUseCase.execute({ page, source });

  return res.status(200).send({
    logs: data,
  });
}
