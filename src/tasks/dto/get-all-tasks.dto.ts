import { TaskStatus } from '../tasks.model';

export class GetAllTasksDto {
  status: TaskStatus;
  search: string;
}
