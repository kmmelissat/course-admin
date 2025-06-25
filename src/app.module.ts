import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CourseModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
