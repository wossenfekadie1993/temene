import { Model } from 'mongoose';
import { Users } from './Schemas/user.schema';
import { SignupDto } from './dtos/signup.dto';
import { Courses } from 'src/courses/Schemas/courses.schema';
export declare class UserService {
    private readonly usersModel;
    private readonly coursesModel;
    constructor(usersModel: Model<Users>, coursesModel: Model<Courses>);
    getUser(email: string): Promise<Users>;
    getAllUsers(): Promise<{
        users: Users[];
        count: number;
    }>;
    createUser(userInfo: SignupDto): Promise<Users>;
    updateUser(original_email: string, userInfo: SignupDto): Promise<Users>;
    isUserEnrolled(email: string, id: string): Promise<Boolean>;
    isUserInstructor(email: string): Promise<Boolean>;
    enrollUser(email: string, id: string): Promise<Users>;
    addCourse(ori_id: string, id: string): Promise<Users>;
    deleteCourse(email: string, id: string): Promise<Users>;
    addStudent(email: string, id: string): Promise<Users>;
    insertImage(email: string, imageUrl: string): Promise<Users>;
    deleteUser(email: string): Promise<void>;
    hashPwd(password: string): Promise<string[]>;
}
