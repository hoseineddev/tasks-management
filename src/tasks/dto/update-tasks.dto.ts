import { IsEnum, IsNotEmpty } from 'class-validator';
import { TaskStatus } from '../tasks.model';

export class UpdateTasksDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
