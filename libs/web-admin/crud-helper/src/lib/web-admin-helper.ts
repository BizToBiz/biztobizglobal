import { User } from '@biztobiz/shared/util-sdk'
import { Maybe } from 'graphql/jsutils/Maybe'

export interface SelectFieldOptions {
  name: string
  type: 'single' | 'multi'
  idName: string
  mapFunction: (v: any) => { value: Maybe<string>; label: string } | { value: Maybe<string>; label: string }[]
}

export function mapUsers(users: User[]): { value: string; label: string }[] {
  return users?.map((option) => ({ value: `${option.id}`, label: `${option.firstName} ${option.lastName}` }))
}
//
// export function mapChapters(chapters: Chapter[]): { value: string; label: string }[] {
//   return chapters?.map((option) => ({ value: `${option.id}`, label: `${option.name}` }))
// }
//
// export function mapTerritories(territories: Territory[]): { value: string; label: string }[] {
//   return territories?.map((option) => ({ value: `${option.id}`, label: `${option.name}` }))
// }

export function mapRegions(regions: any[]): { value: string; label: string }[] {
  return regions?.map((option) => ({ value: `${option.id}`, label: `${option.name}` })) ?? []
}

export function mapUser(user: User): { value: Maybe<string> | undefined; label: string } {
  return {
    value: user.id,
    label: `${user?.firstName} ${user?.lastName}`,
  }
}
//
// export function mapChapter(chapter: Chapter): { value: Maybe<string> | undefined; label: string } {
//   return {
//     value: chapter.id,
//     label: `${chapter?.name}`,
//   }
// }
//
// export function mapTerritory(territory: Territory): { value: Maybe<string> | undefined; label: string } {
//   return {
//     value: territory.id,
//     label: `${territory?.name}`,
//   }
// }
//
// export function mapRegion(region: Region): { value: Maybe<string> | undefined; label: string } {
//   return {
//     value: region.id,
//     label: `${region?.name}`,
//   }
// }
