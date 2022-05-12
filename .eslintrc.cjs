module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  plugins: ["no-relative-import-paths"],

  rules: {
    "no-relative-import-paths/no-relative-import-paths": [
      "warn",
      { allowSameFolder: false },
    ],
  },
};
