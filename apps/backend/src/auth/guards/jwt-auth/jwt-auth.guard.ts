import {ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from "@nestjs/passport"
import { Request } from 'express';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
   
  canActivate(context: ExecutionContext){
    const req=this.getRequest(context)

    if (!req.cookies?.accessToken) {
      throw new UnauthorizedException('Authentication token not found in cookies');
    }

    return super.canActivate(context);
  };

  getRequest(context: ExecutionContext): Request {
    const gqlContext = GqlExecutionContext.create(context);
    const request = gqlContext.getContext().req || context.switchToHttp().getRequest<Request>();

    return request;
  }
  
}
