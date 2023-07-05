import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryLogsRepository } from "../repositories/in-memory/in-memory-logs-repository";
import { ListLogsUseCase } from "./list-logs";
import { Log } from "@domain/logs/enterprise/entities/log-entity";

let sut: ListLogsUseCase;
let logRepository: InMemoryLogsRepository;

describe("List logs use case", () => {
  beforeEach(() => {
    logRepository = new InMemoryLogsRepository();
    sut = new ListLogsUseCase(logRepository);
  });

  it("should be able to list all logs", async () => {
    logRepository.logs.push(
      Log.create({
        data: '{"date":"27/06/2023","endpoint":"/users","apiUrl":"api.com","data":{"name":"Jorge"}}',
        source: "Website",
      }),
      Log.create({
        data: '{"date":"27/06/2023","endpoint":"/users","apiUrl":"api.com","data":{"name":"Jorge"}}',
        source: "API",
      })
    );

    const { data } = await sut.execute({ page: 1 });

    expect(data).toHaveLength(2);
  });

  it('should fetch all logs using "source" as filter', async () => {
    logRepository.logs.push(
      Log.create({
        data: '{"date":"27/06/2023","endpoint":"/users","apiUrl":"api.com","data":{"name":"Jorge"}}',
        source: "Website",
      }),
      Log.create({
        data: '{"date":"27/06/2023","endpoint":"/users","apiUrl":"api.com","data":{"name":"Jorge"}}',
        source: "API",
      })
    );

    const { data } = await sut.execute({ page: 1, source: "API" });

    expect(data).toHaveLength(1);
  });
});
