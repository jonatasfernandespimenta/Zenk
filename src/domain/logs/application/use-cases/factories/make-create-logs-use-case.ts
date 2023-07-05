import { InMemoryLogsRepository } from "../../repositories/in-memory/in-memory-logs-repository";
import { PrismaLogsRepository } from "../../repositories/prisma/prisma-logs-repository";
import { CreateLogUseCase } from "../create-log";

export default function makeCreateLogsUseCase() {
  const logsRepository = new PrismaLogsRepository();
  const createLogsUseCase = new CreateLogUseCase(logsRepository);

  return createLogsUseCase;
}
