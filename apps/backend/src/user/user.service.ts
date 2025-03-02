import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { hash } from 'argon2';

@Injectable()
export class UserService {

  constructor(private prisma:PrismaService){}

  async create(createUserInput:CreateUserInput){
     const { password,...user }=createUserInput;

     const existingUser = await this.prisma.user.findUnique({
      where: { email: user.email },
    });
  
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }
     const hashedpass=await hash(password)

     return await this.prisma.user.create({
       data:{
         password: hashedpass,
         ...user,
       },
     });

  }

 
}
