import { prisma } from "src/lib/prisma";
import { LogRepository } from "../logs-repository";
import { Log } from "@domain/logs/enterprise/entities/log-entity";

export class PrismaLogsRepository implements LogRepository {
  async create({ data, source }: Log) {
    const log = await prisma.log.create({
      data: {
        data,
        source,
      },
    });

    return log;
  }

  async findMany(page: number, source?: string) {
    return await prisma.log.findMany({
      take: 20,
      skip: (page - 1) * 20,
      where: {
        source,
      },
    });
  }
}
