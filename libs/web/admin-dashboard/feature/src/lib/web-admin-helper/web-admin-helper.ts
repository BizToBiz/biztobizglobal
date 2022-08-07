import { Chapter, Region, Territory, User } from '@biztobiz/shared/util-sdk'

export function mapUsers(users: User[]): any {
  return users?.map((option) => ({ value: `${option.id}`, label: `${option.firstName} ${option.lastName}` }))
}

export function mapChapters(chapters: Chapter[]): any {
  return chapters?.map((option) => ({ value: `${option.id}`, label: `${option.name}` }))
}

export function mapTerritories(territories: Territory[]): any {
  return territories?.map((option) => ({ value: `${option.id}`, label: `${option.name}` }))
}

export function mapRegions(regions: any): any {
  return regions?.map((option: Region) => ({ value: `${option.id}`, label: `${option.name}` }))
}

export function mapUser(user?: User): any {
  return {
    value: user?.id,
    label: `${user?.firstName} ${user?.lastName}`,
  }
}

export function mapChapter(chapter?: Chapter): any {
  return {
    value: chapter?.id,
    label: `${chapter?.name}`,
  }
}
