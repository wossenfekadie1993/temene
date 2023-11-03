import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { UserLoginDto } from 'src/user/dtos/login.dto';
import { SignupDto } from 'src/user/dtos/signup.dto';
import { Users } from 'src/user/Schemas/user.schema';
import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UserService, jwtService: JwtService);
    signUp(userInfo: SignupDto): Promise<Users>;
    login(loginInfo: UserLoginDto): Promise<{
        accessToken: string;
    }>;
}
