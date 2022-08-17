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
import * as core from '@angular-devkit/core'
import * as utils from '@nxpm/stack/src/utils'

interface ApiCrud {
  name?: string
  model?: string
  plural?: string
  primaryField?: string
  webAppName?: string
  tags?: string
  directory?: string
  searchFields?: string
}

async function apiCrudGenerator(tree: Tree, schema: ApiCrud, type: string) {
  const filePath = `${schema.directory}/${schema.name}`
  await libraryGenerator(tree, {
    name: type,
    directory: filePath,
    tags: `scope:${schema.directory},type:${type}`,
  })

  const libraryRoot = readProjectConfiguration(tree, `${schema.directory}-${schema.name}-${type}`).root
  const modelName = schema.model || schema.name
  const projectName = `${schema.directory}-${schema.name}-${type}`
  const pluralName = schema.plural || `${modelName}s`
  const formattedSearchFields = schema?.searchFields ? "'" + schema?.searchFields?.split(',').join("','") + "'" : ''
  console.log(formattedSearchFields)
  // @ts-ignore
  const npmScope = workspace.getNpmScope(tree)
  const variables = {
    ...schema,
    ...names(schema.name),
    npmScope,
    apiClassName: names(schema.directory).className,
    modelName,
    modelClassName: names(modelName).className,
    modelPropertyName: names(modelName).propertyName,
    pluralName,
    pluralClassName: names(pluralName).className,
    pluralPropertyName: names(pluralName).propertyName,
    projectName,
    projectClassName: names(projectName).className,
    projectPropertyName: names(projectName).propertyName,
    tmpl: '',
    filePath,
    type,
    typeClassName: names(type).className,
    searchFields: formattedSearchFields,
  }

  generateFiles(
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

function updatePrisma(tree, options) {
  let _a, _b, _c, _d
  const prismaPath =
    (_c =
      (_b = JSON.parse((_a = tree.read('package.json')) === null || _a === void 0 ? void 0 : _a.toString())) === null ||
      _b === void 0
        ? void 0
        : _b.prisma) === null || _c === void 0
      ? void 0
      : _c.schema
  if (!prismaPath) {
    console.error(`Can't find prisma.schema in package.json`)
  }
  console.info(`Found prisma.schema in ${prismaPath}`)
  const schema = (_d = tree.read(prismaPath)) === null || _d === void 0 ? void 0 : _d.toString()
  const modelName = options.model || options.name
  console.log({ modelName })
  const primaryField = options.primaryField || 'name'
  console.log({ primaryField })
  const modelSearchIdentifier = `model ${core.strings.classify(modelName)} {`
  const modelIdentifier = `model ${core.strings.classify(modelName)}`
  if (schema && !schema.includes(modelSearchIdentifier)) {
    const model = [
      `${modelIdentifier} {`,
      `  id        String   @id @default(cuid())`,
      `  createdAt DateTime @default(now())`,
      `  updatedAt DateTime @updatedAt`,
      `  ${primaryField} String`,
      '}',
    ].join('\n')
    tree.overwrite(prismaPath, [schema, model, ''].join('\n\n'))
    console.log(`Add ${modelIdentifier} to ${prismaPath}`)
  }
}
function addImport(tree, options) {
  console.log('started')

  let _a
  const normalizedOptions = utils.normalizeOptions(
    Object.assign(Object.assign({}, options), { directory: options.directory || 'api', name: options.name }),
    workspace.ProjectType.Library,
  )
  const coreFeaturePath = `apps/${normalizedOptions.directory}/src/app/app.module.ts`
  if (!tree.exists(coreFeaturePath)) {
    console.error(`Can't find ${coreFeaturePath}`)
  }
  console.info(`Found ${coreFeaturePath}`)
  const contents = (_a = tree.read(coreFeaturePath)) === null || _a === void 0 ? void 0 : _a.toString()
  if (contents) {
    const app = core.strings.classify(normalizedOptions.directory)
    const name = core.strings.classify(normalizedOptions.name)
    const searchImport = `// Add Imports Here`
    const featureImport = `import { ${app}${name}FeatureModule } from '@${normalizedOptions.npmScope}/${normalizedOptions.directory}/${normalizedOptions.name}/feature'`
    const searchModule = `// Add Modules Here`
    const featureModule = `    ${app}${name}FeatureModule,`
    const replacedModule = contents
      .replace(searchImport, [featureImport, searchImport].join('\n'))
      .replace(searchModule, [featureModule, searchModule].join('\n'))
    tree.overwrite(coreFeaturePath, replacedModule)
  }
}

export default async function (tree: Tree, schema: ApiCrud, ctx) {
  await apiCrudGenerator(tree, schema, 'data-access')
  await apiCrudGenerator(tree, schema, 'feature')
  await updatePrisma(tree, schema)
  await addImport(tree, schema)
  console.warn(`Run 'yarn prisma:apply' and restart the API`)
}
