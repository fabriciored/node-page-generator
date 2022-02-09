/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],

  restoreMocks: true,

  roots: ['<rootDir>'],

  testEnvironment: 'jest-environment-node',

  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
}
