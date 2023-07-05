import { InMemoryLogsRepository } from "../../repositories/in-memory/in-memory-logs-repository";
import { PrismaLogsRepository } from "../../repositories/prisma/prisma-logs-repository";
import { ListLogsUseCase } from "../list-logs";

export default function makeListLogsUseCase() {
  const logsRepository = new PrismaLogsRepository();
  const listLogsUseCase = new ListLogsUseCase(logsRepository);

  return listLogsUseCase;
}
