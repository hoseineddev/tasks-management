export interface Task {
  title: string;
  description: string;
  id: string;
  status: TaskStatus;
}

export enum TaskStatus {
  DONE = 'DONE',
  OPEN = 'OPEN',
  PENDING = 'PENDING',
}

export type Tasks = Task[];
