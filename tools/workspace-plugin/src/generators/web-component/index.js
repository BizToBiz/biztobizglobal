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
var devkit_1 = require('@nx/devkit')
var fs_extra_1 = require('fs-extra')
var path_1 = require('path')
var process = require('process')
function default_1(host, schema) {
  return __awaiter(this, void 0, void 0, function () {
    var nxJson, workspaceJson, target, formattedNames, fileName
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          nxJson = (0, fs_extra_1.readJsonSync)((0, path_1.join)(process.cwd(), 'nx.json'))
          workspaceJson = (0, fs_extra_1.readJsonSync)((0, path_1.join)(process.cwd(), 'workspace.json'))
          if (!workspaceJson.projects[schema.target]) {
            throw new Error('Target '.concat(schema.target, ' not found'))
          }
          if (!workspaceJson.projects[schema.target].sourceRoot) {
            throw new Error('Target '.concat(schema.target, ' sourceRoot not found'))
          }
          target = ''.concat(workspaceJson.projects[schema.target].sourceRoot, '/lib')
          formattedNames = (0, devkit_1.names)(schema.name)
          return [
            4 /*yield*/,
            (0, devkit_1.generateFiles)(
              host,
              (0, path_1.join)(__dirname, 'files'),
              (0, path_1.join)(target, schema.name),
              __assign(__assign({}, formattedNames), {
                npmScope: nxJson.npmScope,
                name: schema.name,
                target: target,
                tmpl: '',
              }),
            ),
          ]
        case 1:
          _a.sent()
          return [4 /*yield*/, (0, devkit_1.formatFiles)(host)]
        case 2:
          _a.sent()
          fileName = formattedNames.fileName
          console.log('Usage: <'.concat(fileName, '></').concat(fileName, '>'))
          return [2 /*return*/]
      }
    })
  })
}
exports.default = default_1
