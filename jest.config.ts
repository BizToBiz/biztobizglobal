const { getJestProjects } = require('@nx/jest')

export default {
  projects: [
    ...getJestProjects(),
    '<rootDir>/libs/web/assets',
    '<rootDir>/libs/web/core/data-access',
    '<rootDir>/libs/web/core/feature',
    '<rootDir>/libs/web/layout',
    '<rootDir>/libs/web/style',
    '<rootDir>/libs/web/styles',
  ],
}
