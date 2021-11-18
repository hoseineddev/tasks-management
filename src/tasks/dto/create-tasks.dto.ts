import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTasksDto {
  @IsNotEmpty({ message: 'Enter Title' })
  @IsString()
  title: string;

  @IsNotEmpty({ message: 'Enter Description' })
  @IsString()
  description: string;
}
