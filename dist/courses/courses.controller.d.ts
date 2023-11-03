/// <reference types="multer" />
import { CoursesService } from './courses.service';
import { createCourseDto } from './dtos/create-course.dto';
import { queryStringDto } from './dtos/query-string.dto';
import { returnCourseDto } from './dtos/return-course.dto';
import { Courses } from './Schemas/courses.schema';
export declare class CoursesController {
    private readonly coursesService;
    constructor(coursesService: CoursesService);
    getAllCourses(queryString: queryStringDto): Promise<{
        courses: Courses[];
        count: number;
    }>;
    getCourse(id: string): Promise<returnCourseDto>;
    uploadedFile(file: Express.Multer.File, id: string): Promise<{
        originalname: string;
        filename: string;
    }>;
    createCourse(request: any, courseInfo: createCourseDto): Promise<returnCourseDto>;
    updateCourse(id: string, courseInfo: Courses): Promise<Courses>;
    deleteCourse(id: string, email: string): Promise<void>;
}
