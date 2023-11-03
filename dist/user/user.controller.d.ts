/// <reference types="multer" />
import { SignupDto } from './dtos/signup.dto';
import { Users } from './Schemas/user.schema';
import { UserService } from './user.service';
export declare class UserController {
    private readonly usersService;
    constructor(usersService: UserService);
    getDetail(request: any): Promise<Users>;
    getAllUsers(): Promise<{
        users: Users[];
        count: number;
    }>;
    uploadedFile(file: Express.Multer.File, request: any): Promise<{
        originalname: string;
        filename: string;
    }>;
    enrollUser(request: any, id: string): Promise<Users>;
    updateUser(request: any, userInfo: SignupDto): Promise<Users>;
    deleteUser(request: any): Promise<void>;
}
