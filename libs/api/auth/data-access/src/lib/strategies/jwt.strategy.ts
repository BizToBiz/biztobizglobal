import { Injectable, Logger } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Request } from 'express'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { ApiAuthDataAccessService } from '../api-auth-data-access.service'
import { JwtDto } from '../dto/jwt.dto'
import { User } from '@biztobiz/api/user/data-access'

function headerAndCookieExtractor(req: Request): string {
  const token = ExtractJwt.fromAuthHeaderAsBearerToken()(req)
  Logger.log({ token })
  if (!token) {
    return cookieExtractor(req)
  }
  return token
}

function cookieExtractor(req: Request): string {
  const name = process.env.API_COOKIE_NAME || '__session'
  Logger.log('cookie', req?.cookies?.[name])
  return req?.cookies?.[name] ? req.cookies[name] : undefined
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly auth: ApiAuthDataAccessService) {
    super({
      jwtFromRequest: headerAndCookieExtractor,
      secretOrKey: process.env.JWT_SECRET,
    })
  }

  async validate(request: Request, payload: JwtDto): Promise<User> {
    // Check if the route is public
    // const isPublicRoute = request?.route?.path === '/public-route' // Adjust the path as per your requirements

    // If it's a public route, return true to allow access without validation
    // if (isPublicRoute) {
    //   return true
    // }

    Logger.log({ payload })

    const user = await this.auth.validateUser(payload.userId)
    // if (!user) {
    //   throw new UnauthorizedException()
    // }
    return user
  }
}
