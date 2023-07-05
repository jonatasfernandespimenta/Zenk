import { Log } from "@domain/logs/enterprise/entities/log-entity";
import { LogRepository } from "../logs-repository";
import { randomUUID } from "crypto";

export class InMemoryLogsRepository implements LogRepository {
  public logs: Log[] = [];

  async create(data: Log) {
    this.logs.push(data);

    return this.logs;
  }
  async findMany(
    page: number,
    source?: string
  ): Promise<{ id: string; data: string; source: string; createdAt: Date }[]> {
    const parsedLogs = this.logs.slice((page - 1) * 20, page * 20).map((log) => {
      return {
        id: randomUUID(),
        data: log.data,
        source: log.source,
        createdAt: log.createdAt,
      };
    });

    if (source) {
      return parsedLogs.filter((log) => log.source == source);
    }

    return parsedLogs;
  }
}
