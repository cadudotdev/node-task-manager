import { TaskInstanceProperties, TaskProperties, TaskStatus } from "./types";

export class Task implements TaskProperties {
  #id: string | null;
  #name: string | null;
  #status: TaskStatus = 'CREATE';

  constructor() {
    this.#id = null;
    this.#name = null;
  }

  get id(): string | null {
    return this.#id;
  }

  set id (value: string) {
    this.#id = value;
  }

  get name(): string | null {
    return this.#name;
  }

  set name(value: string) {
    this.#name = value;
  }

  get status(): TaskStatus {
    return this.#status;
  }

  set status(value: TaskStatus) {
    this.#status = value;
  }

  public build({ id, name }: TaskInstanceProperties): void {
    this.#id = id;
    this.#name = name;
  }
}