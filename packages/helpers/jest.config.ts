/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
import { compilerOptions } from './tsconfig.json'
import type {Config} from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],

  coverageProvider: "v8",
  coverageReporters: [
    "json",
    "text",
    "lcov",
    "clover"
  ],

  maxWorkers: "50%",

  moduleDirectories: [
    "node_modules"
  ],

  moduleFileExtensions: [
      "js",
    "ts",
    "json",
    "node"
  ],
  preset: 'ts-jest/presets/js-with-ts-esm',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  resolver: 'jest-ts-webcompat-resolver',
  modulePaths: [compilerOptions.baseUrl]
};

export default config;
