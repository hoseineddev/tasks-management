import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateTasksDto } from './dto/create-tasks.dto';
import { GetAllTasksDto } from './dto/get-all-tasks.dto';
import { UpdateTasksDto } from './dto/update-tasks.dto';
import { TaskStatus } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // get all tasks and filter
  @Get()
  public getAllTasks(@Query() context: GetAllTasksDto) {
    if (context) return this.tasksService.getTasksByFilter(context);
    return this.tasksService.getAll();
  }

  // get single task
  @Get(':id')
  public getSingleTask(@Param('id') id: string) {
    return this.tasksService.getSingleTask(id);
  }

  @Post('create')
  public createTasks(@Body() context: CreateTasksDto) {
    return this.tasksService.createTask(context);
  }

  @Put(':id')
  public updateTasks(@Param('id') id: string, @Body() context: UpdateTasksDto) {
    return this.tasksService.updateTask(id, context);
  }

  @Patch(':id/status')
  public updateStatusTask(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
  ) {
    return this.tasksService.updateStatusTask(id, status);
  }

  @Delete(':id')
  public deleteTask(@Param('id') id: string) {
    return this.tasksService.deleteTaskById(id);
  }
}
