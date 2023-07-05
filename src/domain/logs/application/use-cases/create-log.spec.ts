import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryLogsRepository } from "../repositories/in-memory/in-memory-logs-repository";
import { CreateLogUseCase } from "./create-log";

let sut: CreateLogUseCase;
let logRepository: InMemoryLogsRepository;

describe("Create log use case", () => {
  beforeEach(() => {
    logRepository = new InMemoryLogsRepository();
    sut = new CreateLogUseCase(logRepository);
  });

  it("should be able to create a log", async () => {
    const log = '{"date":"27/06/2023","endpoint":"/users","apiUrl":"api.com","data":{"name":"Jorge"}}';

    await sut.execute({ data: log, source: "Api" });

    expect(logRepository.logs).toHaveLength(1);
  });
});
