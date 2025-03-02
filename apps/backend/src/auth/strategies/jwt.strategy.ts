import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthJwtpayload } from '../types/auth-jwtPayload';
import { AuthService } from '../auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(
        private configService: ConfigService,
        private authService: AuthService,
      ) {
        super({
          jwtFromRequest: ExtractJwt.fromExtractors([
            (request: Request) => request?.cookies?.accessToken || null
          ]),
          secretOrKey: configService.get<string>('JWT_SECRET') || 'default_secret_key',
          ignoreExpiration: false,
          passReqToCallback: true,
        });
      }

  async validate(payload: AuthJwtpayload) {
    const userId = payload.sub;
    const user = await this.authService.validateJwtUser(userId);
    if (!user) {
      throw new UnauthorizedException('Invalid token');
    }
    return user; 
  }
}
