import { Chapter, Region, Territory, User } from '@biztobiz/shared/util-sdk'
import { Maybe } from 'graphql/jsutils/Maybe'

export function mapUser(user: User): { value: Maybe<string> | undefined; label: string } {
  return {
    value: user.id,
    label: `${user?.firstName} ${user?.lastName}`,
  }
}

export function mapChapter(chapter: Chapter): { value: Maybe<string> | undefined; label: string } {
  return {
    value: chapter.id,
    label: `${chapter?.name}`,
  }
}

export function mapTerritory(territory: Territory): { value: Maybe<string> | undefined; label: string } {
  return {
    value: territory.id,
    label: `${territory?.name}`,
  }
}

export function mapRegion(region: Region): { value: Maybe<string> | undefined; label: string } {
  return {
    value: region.id,
    label: `${region?.name}`,
  }
}
