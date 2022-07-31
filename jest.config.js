module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest'
  },
  modulePaths: ['<rootDir>/src'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/(config|public)/'
  ],
  testRegex: '((\\.|/)(test|spec))\\.js?$',
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  },
  collectCoverage: true,
  collectCoverageFrom: ['**/*.*', '!**/**/*.json'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    './api',
    './config',
    './coverage',
    '<rootDir>/src/pages',
    '.config.js$',
    '.eslintrc.js',
    '.babel.config.js',
    '<rootDir>/src/index.ts',
    './public',
    '_snapshots_'
  ],
  coverageReporters: ['html'],
  setupFilesAfterEnv: ['<rootDir>/src/test/setupTest.js'],
  testEnvironment: 'jsdom'
};
