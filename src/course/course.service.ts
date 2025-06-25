import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
  ) {}

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    const course = this.courseRepository.create(createCourseDto);
    return await this.courseRepository.save(course);
  }

  async findAll(): Promise<Course[]> {
    return await this.courseRepository.find();
  }

  async findOne(id: number): Promise<Course | null> {
    return await this.courseRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateCourseDto: UpdateCourseDto,
  ): Promise<Course | null> {
    await this.courseRepository.update(id, updateCourseDto);
    return await this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.courseRepository.delete(id);
  }
}
