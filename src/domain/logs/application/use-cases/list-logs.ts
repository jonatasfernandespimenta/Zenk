import { Log } from "@domain/logs/enterprise/entities/log-entity";
import { LogRepository } from "../repositories/logs-repository";

interface ListLogsUseCaseResponse {
  data: { id: string; data: string; source: string; createdAt: Date }[] | null;
}

interface ListLogsUseCaseRequest {
  page: number;
  source?: string;
}

export class ListLogsUseCase {
  constructor(private readonly logRepository: LogRepository) {}

  async execute({ page, source }: ListLogsUseCaseRequest): Promise<ListLogsUseCaseResponse> {
    const logs = await this.logRepository.findMany(page, source);

    return { data: logs };
  }
}
