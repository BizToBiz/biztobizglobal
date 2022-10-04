import {
  formatFiles,
  generateFiles,
  installPackagesTask,
  joinPathFragments,
  names,
  readProjectConfiguration,
  Tree,
} from '@nrwl/devkit'
import { libraryGenerator } from '@nrwl/react/src/generators/library/library'
import * as workspace from '@nrwl/workspace'
import { Linter } from '@nrwl/linter'

function addNavigation(tree, options) {
  console.log('Started Adding Navigation')

  let _a

  const routerPath = `libs/web-admin/router/src/lib/web-admin-router.tsx`
  if (!tree.exists(routerPath)) {
    console.error(`Can't find ${routerPath}`)
  }
  console.info(`Found ${routerPath}`)
  const contents = (_a = tree.read(routerPath)) === null || _a === void 0 ? void 0 : _a.toString()
  if (contents) {
    const importEndpoint = '// Add New Imports Here'
    const newImports = `import { WebAdmin${options.className}Create, WebAdmin${options.className}List, WebAdmin${options.className}Update } from '@${options.npmScope}/web-admin/${options.name}'`
    const navEndpoint = '// Add New Nav Objects Here'
    const newNav = `{
      name: '${options.pluralClassName}',
      href: '/admin/${options.pluralName}',
      icon: HomeIcon,
      current: currentPath.path.includes('/admin/${options.pluralName}'),
    },`
    const routeEndpoint = `{/*Add New Routes Here*/}`
    const newRoute = `<Route path="${options.pluralName}" element={<WebAdmin${options.className}List />} />
        <Route path="${options.name}">
          <Route path="new" element={<WebAdmin${options.className}Create />} />
          <Route path=":id" element={<WebAdmin${options.className}Update />} />
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
    `libs/shared/util-sdk/src/graphql/admin/${schema.name}`, // destination path of the files
    variables, // config object to replace variable in file templates
  )

  addNavigation(tree, variables)
  await formatFiles(tree)
  return () => {
    installPackagesTask(tree)
    console.warn(`Restart the API and Web Server to see changes`)
  }
}
