import { Log } from "@domain/logs/enterprise/entities/log-entity";
import { LogRepository } from "../repositories/logs-repository";

interface ICreateLogUseCaseRequest {
  data: string;
  source: string;
}

export class CreateLogUseCase {
  constructor(private readonly logRepository: LogRepository) {}

  async execute({ data, source }: ICreateLogUseCaseRequest) {
    const log = Log.create({ source, data });

    await this.logRepository.create(log);
  }
}
