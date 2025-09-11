module.exports = {
  plugins: ["import"],
  rules: {
    "import/order": [
      "error",
      {
        groups: [
          "builtin", // node bawaan: fs, path, dll
          "external", // lib eksternal: react, react-native, gluestack
          "internal", // alias project: @/*
          ["parent", "sibling", "index"], // relative ./ ../
        ],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "react-native",
            group: "external",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always", // <---- ini yg bikin ada empty line
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};
