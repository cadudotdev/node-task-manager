export type TaskStatus = 'CREATE' | 'RUNNING' | 'KILLED' | 'COMPLETED';

export interface TaskInstanceProperties {
  id: string | null;
  name: string | null;
  status: TaskStatus;
}

export interface TaskProperties extends TaskInstanceProperties {
  build: (taskProperties: TaskInstanceProperties) => void;
}