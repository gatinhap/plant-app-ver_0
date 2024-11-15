module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/all",
    "plugin:styled-components-a11y/recommended"
  ],
  parserOptions: {
    project: ["./tsconfig.json"]
  },
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react-refresh",
    "@typescript-eslint",
    "react",
    "styled-components-a11y",
    "prefer-arrow-functions"
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true }
    ],
    "prefer-arrow-functions/prefer-arrow-functions": [
      "warn",
      {
        allowNamedFunctions: false,
        classPropertiesAllowed: false,
        disallowPrototype: false,
        returnStyle: "implicit",
        singleReturnOnly: true
      }
    ]
  }
};
