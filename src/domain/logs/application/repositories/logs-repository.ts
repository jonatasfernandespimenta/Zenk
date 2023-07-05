import { Log } from "@domain/logs/enterprise/entities/log-entity";

export interface LogRepository {
  create(data: Log): Promise<any>;
  findMany(
    page: number,
    source?: string
  ): Promise<{ id: string; data: string; source: string; createdAt: Date }[] | null>;
}
