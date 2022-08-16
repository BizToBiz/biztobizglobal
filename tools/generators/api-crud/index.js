'use strict'
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1]
          return t[1]
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this
        }),
      g
    )
    function verb(n) {
      return function (v) {
        return step([n, v])
      }
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.')
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t = op[0] & 2 ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t
          if (((y = 0), t)) op = [op[0] & 2, t.value]
          switch (op[0]) {
            case 0:
            case 1:
              t = op
              break
            case 4:
              _.label++
              return { value: op[1], done: false }
            case 5:
              _.label++
              y = op[1]
              op = [0]
              continue
            case 7:
              op = _.ops.pop()
              _.trys.pop()
              continue
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0
                continue
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1]
                break
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1]
                t = op
                break
              }
              if (t && _.label < t[2]) {
                _.label = t[2]
                _.ops.push(op)
                break
              }
              if (t[2]) _.ops.pop()
              _.trys.pop()
              continue
          }
          op = body.call(thisArg, _)
        } catch (e) {
          op = [6, e]
          y = 0
        } finally {
          f = t = 0
        }
      if (op[0] & 5) throw op[1]
      return { value: op[0] ? op[1] : void 0, done: true }
    }
  }
Object.defineProperty(exports, '__esModule', { value: true })
var devkit_1 = require('@nrwl/devkit')
var generators_1 = require('@nrwl/workspace/generators')
var workspace = require('@nrwl/workspace')
var core = require('@angular-devkit/core')
var utils = require('@nxpm/stack/src/utils')
function apiCrudGenerator(tree, schema, type) {
  return __awaiter(this, void 0, void 0, function () {
    var filePath, libraryRoot, modelName, projectName, pluralName, formattedSearchFields, npmScope, variables
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          filePath = ''.concat(schema.directory, '/').concat(schema.name)
          return [
            4 /*yield*/,
            (0, generators_1.libraryGenerator)(tree, {
              name: type,
              directory: filePath,
              tags: 'scope:'.concat(schema.directory, ',type:').concat(type),
            }),
          ]
        case 1:
          _e.sent()
          libraryRoot = (0, devkit_1.readProjectConfiguration)(
            tree,
            ''.concat(schema.directory, '-').concat(schema.name, '-').concat(type),
          ).root
          modelName = schema.model || schema.name
          projectName = ''.concat(schema.directory, '-').concat(schema.name, '-').concat(type)
          pluralName = schema.plural || ''.concat(modelName, 's')
          formattedSearchFields =
            "'" + (schema === null || schema === void 0 ? void 0 : schema.searchFields.split(',').join("','")) + "'"
          console.log(formattedSearchFields)
          npmScope = workspace.getNpmScope(tree)
          variables = __assign(__assign(__assign({}, schema), (0, devkit_1.names)(schema.name)), {
            npmScope: npmScope,
            apiClassName: (0, devkit_1.names)(schema.directory).className,
            modelName: modelName,
            modelClassName: (0, devkit_1.names)(modelName).className,
            modelPropertyName: (0, devkit_1.names)(modelName).propertyName,
            pluralName: pluralName,
            pluralClassName: (0, devkit_1.names)(pluralName).className,
            pluralPropertyName: (0, devkit_1.names)(pluralName).propertyName,
            projectName: projectName,
            projectClassName: (0, devkit_1.names)(projectName).className,
            projectPropertyName: (0, devkit_1.names)(projectName).propertyName,
            tmpl: '',
            filePath: filePath,
            type: type,
            typeClassName: (0, devkit_1.names)(type).className,
            searchFields: formattedSearchFields,
          })
          ;(0, devkit_1.generateFiles)(
            tree, // the virtual file system
            (0, devkit_1.joinPathFragments)(__dirname, './files/'.concat(type)), // path to the file templates
            libraryRoot, // destination path of the files
            variables,
          )
          return [4 /*yield*/, (0, devkit_1.formatFiles)(tree)]
        case 2:
          _e.sent()
          return [
            2 /*return*/,
            function () {
              ;(0, devkit_1.installPackagesTask)(tree)
            },
          ]
      }
    })
  })
}
function updatePrisma(tree, options) {
  var _a, _b, _c, _d
  var prismaPath =
    (_c =
      (_b = JSON.parse((_a = tree.read('package.json')) === null || _a === void 0 ? void 0 : _a.toString())) === null ||
      _b === void 0
        ? void 0
        : _b.prisma) === null || _c === void 0
      ? void 0
      : _c.schema
  if (!prismaPath) {
    console.error("Can't find prisma.schema in package.json")
  }
  console.info('Found prisma.schema in '.concat(prismaPath))
  var schema = (_d = tree.read(prismaPath)) === null || _d === void 0 ? void 0 : _d.toString()
  var modelName = options.model || options.name
  console.log({ modelName: modelName })
  var primaryField = options.primaryField || 'name'
  console.log({ primaryField: primaryField })
  var modelSearchIdentifier = 'model '.concat(core.strings.classify(modelName), ' {')
  var modelIdentifier = 'model '.concat(core.strings.classify(modelName))
  if (schema && !schema.includes(modelSearchIdentifier)) {
    var model = [
      ''.concat(modelIdentifier, ' {'),
      '  id        String   @id @default(cuid())',
      '  createdAt DateTime @default(now())',
      '  updatedAt DateTime @updatedAt',
      '  '.concat(primaryField, ' String'),
      '}',
    ].join('\n')
    tree.overwrite(prismaPath, [schema, model, ''].join('\n\n'))
    console.log('Add '.concat(modelIdentifier, ' to ').concat(prismaPath))
  }
}
function addImport(tree, options) {
  console.log('started')
  var _a
  var normalizedOptions = utils.normalizeOptions(
    Object.assign(Object.assign({}, options), { directory: options.directory || 'api', name: options.name }),
    workspace.ProjectType.Library,
  )
  var coreFeaturePath = 'apps/'.concat(normalizedOptions.directory, '/src/app/app.module.ts')
  if (!tree.exists(coreFeaturePath)) {
    console.error("Can't find ".concat(coreFeaturePath))
  }
  console.info('Found '.concat(coreFeaturePath))
  var contents = (_a = tree.read(coreFeaturePath)) === null || _a === void 0 ? void 0 : _a.toString()
  if (contents) {
    var app = core.strings.classify(normalizedOptions.directory)
    var name_1 = core.strings.classify(normalizedOptions.name)
    var searchImport = 'import { '
      .concat(app, "CoreFeatureModule } from '@")
      .concat(normalizedOptions.npmScope, '/')
      .concat(normalizedOptions.directory, "/core/feature'")
    var featureImport = 'import { '
      .concat(app)
      .concat(name_1, "FeatureModule } from '@")
      .concat(normalizedOptions.npmScope, '/')
      .concat(normalizedOptions.directory, '/')
      .concat(normalizedOptions.name, "/feature'")
    var searchModule = ''.concat(app, 'CoreFeatureModule,')
    var featureModule = '    '.concat(app).concat(name_1, 'FeatureModule,')
    var replacedModule = contents
      .replace(searchImport, [searchImport, featureImport].join('\n'))
      .replace(searchModule, [searchModule, featureModule].join('\n'))
    tree.overwrite(coreFeaturePath, replacedModule)
  }
}
function default_1(tree, schema, ctx) {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          return [4 /*yield*/, apiCrudGenerator(tree, schema, 'data-access')]
        case 1:
          _e.sent()
          return [4 /*yield*/, apiCrudGenerator(tree, schema, 'feature')]
        case 2:
          _e.sent()
          return [4 /*yield*/, updatePrisma(tree, schema)]
        case 3:
          _e.sent()
          return [4 /*yield*/, addImport(tree, schema)]
        case 4:
          _e.sent()
          console.warn("Run 'yarn prisma:apply' and restart the API")
          return [2 /*return*/]
      }
    })
  })
}
exports.default = default_1
