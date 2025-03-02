import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignInInput } from './dto/signin.input';
import { verify } from 'argon2';
import { User } from '@prisma/client';
import { JwtService} from "@nestjs/jwt"
import { AuthJwtpayload } from './types/auth-jwtPayload';

@Injectable()
export class AuthService {

    constructor(
        private prisma:PrismaService,
        private jwtService: JwtService
    ){}


    async validateLocalUser({email,password}: SignInInput){
        const user=await this.prisma.user.findUnique({
            where:{email},
        });

        if(!user) throw new UnauthorizedException("User not found")

        const passwordmatch=await verify(user.password,password)

        if(!passwordmatch) throw new UnauthorizedException('Invalid Credentials')

         return user;   

    };


    async generatetoken(userId:string){
        const payload: AuthJwtpayload ={ sub: userId }
        const accessToken=await this.jwtService.signAsync(payload)
        return {accessToken};

    };

    async login(user:User){

        const {accessToken}=await this.generatetoken(user.id);
        return {
            id: user.id,
            name: user.name,
            avatar: user.avatar,
            accessToken
        }
    };



}
