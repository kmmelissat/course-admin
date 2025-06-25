import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
  ) { }

  async create(dto: CreateCourseDto): Promise<Course> {
    const course = this.courseRepository.create({
      title: dto.title,
      description: dto.description,
      price: dto.price
    })

    return this.courseRepository.save(course)
  }
}
