module.exports = {
  env: {
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier", "prettier/react"],
  parser: "babel-eslint",
  globals: {
    __DEV__: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": ["error", {singleQuote: false, parser: "flow"}],
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".jsx", "js"],
      },
    ],
    "import/prefer-default-export": "off",
  },
};
