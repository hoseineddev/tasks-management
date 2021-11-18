import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTasksDto } from './dto/create-tasks.dto';
import { Task, Tasks, TaskStatus } from './tasks.model';
import { v4 as generateId } from 'uuid';
import { UpdateTasksDto } from './dto/update-tasks.dto';
import { GetAllTasksDto } from './dto/get-all-tasks.dto';

@Injectable()
export class TasksService {
  private tasks: Tasks = [];
  getAll(): Tasks {
    return [...this.tasks];
  }

  getSingleTask(id: string): Task | NotFoundException {
    const task = this.tasks.find((element) => element.id === id);
    if (!task) throw new NotFoundException('The Task Not Exists');
    return task;
  }

  createTask(context: CreateTasksDto): Task {
    const task: Task = {
      title: context.title,
      description: context.description,
      id: generateId(),
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }

  updateStatusTask(id: string, status: TaskStatus): Task {
    const task: Task = this.getSingleTask(id) as Task;
    task.status = status;
    return task;
  }

  updateTask(id: string, context: UpdateTasksDto): Task {
    let task: Task = this.getSingleTask(id) as Task;
    task.title = context.title;
    task.status = context.status;
    task.description = context.description;
    return task;
  }

  deleteTaskById(id: string): Task {
    const task = this.getSingleTask(id);
    this.tasks = this.tasks.filter((element) => element.id !== id);
    return task as Task;
  }

  getTasksByFilter(context: GetAllTasksDto): Tasks {
    let tasks = this.getAll();
    if (context.status)
      tasks = tasks.filter((element) => element.status === context.status);
    if (context.search)
      tasks = tasks.filter(
        (element) =>
          element.title.includes(context.search) ||
          element.description.includes(context.search),
      );
    return tasks;
  }
}
