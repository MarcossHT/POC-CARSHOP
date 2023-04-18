/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  roots: ['<rootDir>/test'],
  modulePathIgnorePatterns: ['<rootDir>/test/mocks'],
  collectCoverageFrom: ['<rootDir>/src/core/use-cases/**'],
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  preset: 'ts-jest',
  moduleDirectories: ['node_modules'],
  watchPathIgnorePatterns: ['globalConfig'],
  moduleNameMapper: {
    '^@presentation/(.*)$': '<rootDir>/src/presentation/$1',
    '^@infra/(.*)$': '<rootDir>/src/infra/$1',
    '^@core/(.*)$': '<rootDir>/src/core/$1',
    '^@main/(.*)$': '<rootDir>/src/main/$1',
    '^@test/(.*)$': '<rootDir>/test/$1',
    '^@di/(.*)$': '<rootDir>/src/di/$1',
    '^@infrastructure/(.*)$': '<rootDir>/src/infra/$1',
  },
};
