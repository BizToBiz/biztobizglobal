import {
  formatFiles,
  generateFiles,
  installPackagesTask,
  joinPathFragments,
  names,
  readProjectConfiguration,
  Tree,
} from '@nx/devkit'
import { libraryGenerator } from '@nx/react/src/generators/library/library'
import * as workspace from '@nx/workspace'
import { Linter } from '@nx/linter'

function addNavigation(tree, options) {
  console.log('Started Adding Navigation')

  let _a

  const routerPath = `libs/web-leader/router/src/lib/web-leader-router.tsx`
  if (!tree.exists(routerPath)) {
    console.error(`Can't find ${routerPath}`)
  }
  console.info(`Found ${routerPath}`)
  const contents = (_a = tree.read(routerPath)) === null || _a === void 0 ? void 0 : _a.toString()
  if (contents) {
    const importEndpoint = '// Add New Imports Here'
    const newImports = `import { WebLeader${options.className}Create, WebLeader${options.className}List, WebLeader${options.className}Update } from '@${options.npmScope}/web-leader/${options.name}'`
    const navEndpoint = '// Add New Nav Objects Here'
    const newNav = `{
      name: '${options.pluralClassName}',
      href: '/leader/${options.pluralName}',
      icon: HomeIcon,
      current: currentPath.path.includes('/leader/${options.pluralName}'),
    },`
    const routeEndpoint = `{/*Add New Routes Here*/}`
    const newRoute = `<Route path="${options.pluralName}" element={<WebLeader${options.className}List />} />
        <Route path="${options.propertyName}">
          <Route path="new" element={<WebLeader${options.className}Create />} />
          <Route path=":id" element={<WebLeader${options.className}Update />} />
        </Route>`
    const replacedModule = contents
      .replace(importEndpoint, [newImports, importEndpoint].join('\n'))
      .replace(navEndpoint, [newNav, navEndpoint].join('\n'))
      .replace(routeEndpoint, [newRoute, routeEndpoint].join('\n'))

    tree.overwrite(routerPath, replacedModule)
  }
}

export default async function (tree: Tree, schema: any) {
  await libraryGenerator(tree, {
    name: schema.name,
    directory: 'web-leader',
    style: 'none',
    skipTsConfig: false,
    skipFormat: false,
    unitTestRunner: 'jest',
    linter: Linter.EsLint,
  })
  const libraryRoot = readProjectConfiguration(tree, `web-leader-${schema.name}`).root
  // @ts-ignore
  const npmScope = workspace.getNpmScope(tree)
  const pluralName = schema.plural || `${schema.name}s`
  const pluralNames = names(pluralName)
  const variables = {
    ...schema,
    ...names(schema.name),
    pluralName: pluralNames.name,
    pluralClassName: pluralNames.className,
    pluralPropertyName: pluralNames.propertyName,
    npmScope,
    tmpl: '',
  }
  generateFiles(
    tree, // the virtual file system
    joinPathFragments(__dirname, `./files`), // path to the file templates
    libraryRoot, // destination path of the files
    variables, // config object to replace variable in file templates
  )
  generateFiles(
    tree, // the virtual file system
    joinPathFragments(__dirname, `./sdk-files`), // path to the file templates
    `libs/shared/util-sdk/src/graphql/leader/${schema.name}`, // destination path of the files
    variables, // config object to replace variable in file templates
  )

  addNavigation(tree, variables)
  await formatFiles(tree)
  return () => {
    installPackagesTask(tree)
    console.warn(`Restart the API and Web Server to see changes`)
  }
}
