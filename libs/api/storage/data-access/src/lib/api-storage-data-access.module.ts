import { DriverType, StorageModule, StorageService } from '@codebrew/nestjs-storage'
import { Module } from '@nestjs/common'
import { GoogleCloudStorage } from '@slynova/flydrive-gcs'
import { join } from 'path'
import { ApiStorageDataAccessService } from './api-storage-data-access.service'

@Module({
  imports: [
    StorageModule.forRoot({
      default: 'tmp',
      disks: {
        tmp: {
          driver: DriverType.LOCAL,
          config: {
            root: join(process.cwd(), 'tmp'),
          },
        },
      },
    }),
  ],
  providers: [ApiStorageDataAccessService],
  exports: [ApiStorageDataAccessService],
})
export class ApiStorageDataAccessModule {
  constructor(private readonly storage: StorageService) {
    this.storage.registerDriver(DriverType.GCS, GoogleCloudStorage)
  }
}
