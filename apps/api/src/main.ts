import { ApiCoreFeatureService } from '@biztobiz/api/core/feature'
import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import * as cookieParser from 'cookie-parser'

import { AppModule } from './app/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const config = app.get(ApiCoreFeatureService)
  const globalPrefix = 'api'
  app.setGlobalPrefix(globalPrefix)
  app.enableCors({
    credentials: true,
    origin: config.apiCorsOrigins,
  })
  app.use(cookieParser())
  const port = process.env.PORT || 3333
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix)
    Logger.log('Listening at http://localhost:' + port + '/graphql')
  })
}

bootstrap()
