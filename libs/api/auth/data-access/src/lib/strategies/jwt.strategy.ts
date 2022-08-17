import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Request } from 'express'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { JwtDto } from '../dto/jwt.dto'
// import { ApiAuthDataAccessService } from '@biztobiz/api/auth/data-access'
import { User } from '@biztobiz/api/user/data-access'

function headerAndCookieExtractor(req: Request): string {
  const token = ExtractJwt.fromAuthHeaderAsBearerToken()(req)
  if (!token) {
    return cookieExtractor(req)
  }
  return token
}

function cookieExtractor(req: Request): string {
  const name = process.env.API_COOKIE_NAME || '__session'
  return req?.cookies?.[name] ? req.cookies[name] : undefined
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: headerAndCookieExtractor,
      secretOrKey: process.env.JWT_SECRET,
    })
  }

  async validate(payload: JwtDto): Promise<User> {
    const user = await this.auth.validateUser(payload.userId)
    if (!user) {
      throw new UnauthorizedException()
    }
    return user
  }
}
