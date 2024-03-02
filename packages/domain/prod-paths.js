const tsConfig = require("./tsconfig.json");
const tsConfigPath = require("tsconfig-paths");

tsConfigPath.register({
  baseUrl: "./dist",
  paths: tsConfig.compilerOptions.paths,
});
