import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule],
  controllers: [],
  exports: [],
  providers: []
})
export class AppModule {}
