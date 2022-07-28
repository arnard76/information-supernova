module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
    ecmaVersion: 2020,
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
  ],
  rules: {
    "quotes": ["error", "double"],
    "object-curly-spacing": "off",
    "@typescript-eslint/object-curly-spacing": ["warn"],
    "import/no-unresolved": 0,
  },
};
