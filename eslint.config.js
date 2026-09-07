import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
    globalIgnores(["dist/**"]),

    {
        files: ["**/*.ts", "**/*.tsx"],

        extends: [
            eslint.configs.recommended,
            tseslint.configs.strictTypeChecked,
            tseslint.configs.stylisticTypeChecked,
            prettierConfig,
            perfectionist.configs["recommended-natural"],
        ],

        plugins: {
            "simple-import-sort": simpleImportSort,
        },

        rules: {
            "simple-import-sort/exports": "error",
            "simple-import-sort/imports": "error",
        },

        "lint-staged": {
            ".{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
            ".{json,md,css,scss,html,yaml,yml}": ["prettier --write"],
        },

        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
]);
