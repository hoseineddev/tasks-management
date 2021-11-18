import { TaskStatus } from "../tasks.model";

export class UpdateTasksDto {
  title: string;
  description: string;
  status: TaskStatus;
}
