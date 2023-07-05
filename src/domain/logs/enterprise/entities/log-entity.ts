import { UniqueEntityID } from "@core/entities/unique-entity-id";
import { Entity } from "@core/entities/entity";
import { Optional } from "@core/@types/optional";

interface LogProps {
  data: string;
  source: string;
  createdAt: Date;
}

export class Log extends Entity<LogProps> {
  get data() {
    return this.props.data;
  }

  get source() {
    return this.props.source;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  static create(props: Optional<LogProps, "createdAt">, id?: UniqueEntityID) {
    const log = new Log({ ...props, createdAt: new Date() }, id);

    return log;
  }
}
