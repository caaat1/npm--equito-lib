// const config = {
//     env: {
//         es6: true,
//         node: true,
//     },
//     extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
//     parser: "@typescript-eslint/parser",
//     parserOptions: {
//         ecmaVersion: 2018,
//         sourceType: "module",
//     },
//     plugins: ["@typescript-eslint"],
//     rules: {
//         "newline-after-import": ["error", { count: 1 }],
//     },
// };

// export default config;
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [{
    // Specify the files this configuration applies to
    files: ["**/*.ts"],
    // Environment settings
    env: {
        browser: true,
        es2021: true,
    },
    // Extended configurations
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    // Plugins
    plugins: {
        "@typescript-eslint": typescriptEslint,
    },
    // Parser options
    languageOptions: {
        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",
    },
    // Custom rules
    rules: {
        "@typescript-eslint/explicit-member-accessibility": ["error", {
            accessibility: "explicit",
        }],
        "@typescript-eslint/naming-convention": ["warn", {
            selector: "import",
            format: ["camelCase", "PascalCase"],
        }],
        curly: "warn",
        eqeqeq: "warn",
        "no-throw-literal": "warn",
        semi: "warn",
    },
    // Ignore patterns
    ignores: [
        "node_modules/",
        "dist/",
        "out/",
    ],
}];
