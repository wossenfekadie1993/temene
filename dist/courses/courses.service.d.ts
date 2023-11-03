import { Model } from 'mongoose';
import { UserService } from 'src/user/user.service';
import { createCourseDto } from './dtos/create-course.dto';
import { queryStringDto } from './dtos/query-string.dto';
import { returnCourseDto } from './dtos/return-course.dto';
import { Courses } from './Schemas/courses.schema';
export declare class CoursesService {
    private readonly coursesModel;
    private readonly userService;
    constructor(coursesModel: Model<Courses>, userService: UserService);
    createCourse(id: string, courseDetail: createCourseDto): Promise<returnCourseDto>;
    getCourse(id: string): Promise<returnCourseDto>;
    getAllCourses(queryString: queryStringDto): Promise<{
        courses: Courses[];
        count: number;
    }>;
    updateCourse(id: string, courseInfo: Courses): Promise<Courses>;
    insertImage(id: string, imageUrl: string): Promise<Courses>;
    deleteCourse(id: string, email: string): Promise<void>;
}
