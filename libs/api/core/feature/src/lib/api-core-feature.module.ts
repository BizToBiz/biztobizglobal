import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { GraphQLIntercomModule } from '@kikstart-playground/graphql-intercom'
import { Logger, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { PubSub } from 'graphql-subscriptions'
import { join } from 'path'
import { configuration } from './config/configuration'
import { validationSchema } from './config/validation'
import { ApiCoreFeatureController } from './api-core-feature.controller'
import { ApiCoreFeatureResolver } from './api-core-feature.resolver'
import { ApiCoreFeatureService } from './api-core-feature.service'
import { ServeStaticModule } from '@nestjs/serve-static'
import { writeFileSync } from 'fs'
import { ensureDirSync, existsSync } from 'fs-extra'

const rootPath = join(__dirname, '..', 'biztobiz')

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'api-schema.graphql'),
      context: ({ req, res }) => ({ req, res }),
      installSubscriptionHandlers: true,
      sortSchema: true,
    }),
    GraphQLIntercomModule.forRoot({ pubSub: new PubSub() }),
    ServeStaticModule.forRoot({
      rootPath,
      exclude: ['/api', '/graphql'],
    }),
  ],
  controllers: [ApiCoreFeatureController],
  providers: [ApiCoreFeatureResolver, ApiCoreFeatureService],
  exports: [ApiCoreFeatureService],
})
export class ApiCoreFeatureModule {
  constructor() {
    if (!existsSync(rootPath)) {
      ensureDirSync(rootPath)
      writeFileSync(join(rootPath, 'index.html'), `<pre>Run 'yarn build:web' to build the frontend.</pre>`)
      Logger.verbose(`Created static root path ${rootPath}`)
    }
  }
}
