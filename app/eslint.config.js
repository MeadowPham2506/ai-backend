const { environments } = require("eslint-plugin-prettier");

// eslint.config.js
const jsFiles = ["**/*.js", "**/*.jsx"];
const tsFiles = ["**/*.ts", "**/*.tsx"];

const eslintRecommended = require("@eslint/js").configs.recommended;
const tsRecommended = require("@typescript-eslint/eslint-plugin").configs.recommended;

module.exports = [
    {
        environments: ["browser", "node", "es2020"],
    },
    {
        ignores: ["node_modules", "dist"],
    },
    {
        files: tsFiles,
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            parser: require("@typescript-eslint/parser"),
            parserOptions: {
                project: true,
            },
            globals: {
                console: "readonly",
                document: "readonly",
            },
        },
        plugins: {
            "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
        },
        rules: {
            ...tsRecommended.rules,
            "no-unused-vars": "warn",
            // "no-console": "warn",
            "@typescript-eslint/explicit-function-return-type": "warn",
        },
    },
    {
        files: jsFiles,
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                console: "readonly",
                document: "readonly",
            },
        },
        rules: {
            ...eslintRecommended.rules,
            "no-unused-vars": "warn",
            "no-console": "warn",
        },
    },
];