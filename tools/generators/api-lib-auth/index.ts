import {
  formatFiles,
  generateFiles,
  installPackagesTask,
  joinPathFragments,
  names,
  readProjectConfiguration,
  Tree,
} from '@nrwl/devkit'
import { libraryGenerator } from '@nrwl/workspace/generators'
import * as workspace from '@nrwl/workspace'

async function apiAuthGenerator(tree: Tree, schema: any, type: string) {
  const filePath = `${schema.directory}/auth`
  await libraryGenerator(tree, {
    name: type,
    directory: filePath,
    tags: `scope:${schema.directory},type:${type}`,
  })
  const libraryRoot = readProjectConfiguration(tree, `${schema.directory}-auth-${type}`).root
  // @ts-ignore
  const npmScope = workspace.getNpmScope(tree)
  const variables = {
    ...schema,
    ...names(schema.directory),
    npmScope,
    tmpl: '',
  }
  await generateFiles(
    tree, // the virtual file system
    joinPathFragments(__dirname, `./files/${type}`), // path to the file templates
    libraryRoot, // destination path of the files
    variables, // config object to replace variable in file templates
  )
  await formatFiles(tree)
  return () => {
    installPackagesTask(tree)
  }
}

export default async function (tree: Tree, schema: any) {
  await apiAuthGenerator(tree, schema, 'data-access')
  await apiAuthGenerator(tree, schema, 'feature')
  await apiAuthGenerator(tree, schema, 'util')
}
