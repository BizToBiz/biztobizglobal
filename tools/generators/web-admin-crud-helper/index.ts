import {
  formatFiles,
  generateFiles,
  installPackagesTask,
  joinPathFragments,
  readProjectConfiguration,
  Tree,
} from '@nrwl/devkit'
import { libraryGenerator } from '@nrwl/react/src/generators/library/library'
import * as workspace from '@nrwl/workspace'
import { Linter } from '@nrwl/linter'

export default async function (tree: Tree, schema: any) {
  await libraryGenerator(tree, {
    name: schema.name,
    directory: 'web-admin',
    style: 'none',
    skipTsConfig: false,
    skipFormat: false,
    unitTestRunner: 'jest',
    linter: Linter.EsLint,
  })
  const libraryRoot = readProjectConfiguration(tree, `web-admin-${schema.name}`).root
  // @ts-ignore
  const npmScope = workspace.getNpmScope(tree)
  const variables = {
    ...schema,
    npmScope,
    tmpl: '',
  }
  generateFiles(
    tree, // the virtual file system
    joinPathFragments(__dirname, `./files`), // path to the file templates
    libraryRoot, // destination path of the files
    variables, // config object to replace variable in file templates
  )
  await formatFiles(tree)
  return () => {
    installPackagesTask(tree)
  }
}
