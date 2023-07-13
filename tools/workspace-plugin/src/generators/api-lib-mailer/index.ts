import {
  formatFiles,
  generateFiles,
  installPackagesTask,
  joinPathFragments,
  names,
  readProjectConfiguration,
  Tree,
} from '@nx/devkit'
import { libraryGenerator } from '@nx/workspace/generators'
import * as workspace from '@nx/workspace'

export default async function (tree: Tree, schema: any) {
  const filePath = `${schema.directory}/mailer`
  await libraryGenerator(tree, {
    name: 'data-access',
    directory: filePath,
    tags: `scope:${schema.directory},type:data-access`,
  })
  const libraryRoot = readProjectConfiguration(tree, `${schema.directory}-mailer-data-access`).root
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
    joinPathFragments(__dirname, `./files/data-access`), // path to the file templates
    libraryRoot, // destination path of the files
    variables, // config object to replace variable in file templates
  )
  await formatFiles(tree)
  return () => {
    installPackagesTask(tree)
  }
}
