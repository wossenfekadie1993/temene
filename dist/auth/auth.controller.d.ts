import { ConfigService } from '@nestjs/config';
import { UserLoginDto } from 'src/user/dtos/login.dto';
import { SignupDto } from 'src/user/dtos/signup.dto';
import { Users } from 'src/user/Schemas/user.schema';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
export declare class AuthController {
    private readonly authService;
    private readonly configService;
    private readonly usersService;
    constructor(authService: AuthService, configService: ConfigService, usersService: UserService);
    signUp(userInfo: SignupDto): Promise<Users>;
    login(loginInfo: UserLoginDto): Promise<{
        accessToken: string;
    }>;
    checkJwt(token: string): Promise<any>;
}
