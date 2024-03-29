import { libraryGenerator } from '@nrwl/angular/src/schematics/library/library'
import { formatFiles, Tree } from '@nx/devkit'

async function createLibrary(host: Tree, appName, name, dryRun = false) {
  const directory = `${appName}/${name}`
  await libraryGenerator(host, { name: 'data-access', directory, tags: `scope:${appName},type:data-access`, dryRun })
  await libraryGenerator(host, { name: 'feature', directory, tags: `scope:${appName},type:feature`, dryRun })
  await libraryGenerator(host, { name: 'ui', directory, tags: `scope:${appName},type:feature`, dryRun })
}

export default async function (host: Tree, schema: { name: string; appName: string; dryRun?: boolean }) {
  const appName = schema.appName || 'web'
  await createLibrary(host, appName, schema.name, schema.dryRun)
  await formatFiles(host)
}
