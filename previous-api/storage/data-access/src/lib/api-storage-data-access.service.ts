import { DriverType, StorageService } from '@codebrew/nestjs-storage'
import { Injectable } from '@nestjs/common'
import { GoogleCloudStorage } from '@slynova/flydrive-gcs'
import { AVATARS_DISK, TMP_DISK } from './api-storage-data-access.constants'

@Injectable()
export class ApiStorageDataAccessService {
  constructor(private readonly storage: StorageService) {
    this.storage.registerDriver(DriverType.GCS, GoogleCloudStorage)
  }

  avatarsDisk() {
    return this.storage.getDisk(AVATARS_DISK)
  }

  tmpDisk() {
    return this.storage.getDisk(TMP_DISK)
  }

  async avatarsFiles() {
    const data = await this.avatarsDisk().flatList()

    const items = []
    for await (const item of data) {
      items.push(item)
    }
    return items
  }

  async tmpFiles() {
    const data = await this.tmpDisk().flatList()

    const items = []
    for await (const item of data) {
      items.push(item)
    }
    return items
  }
}
