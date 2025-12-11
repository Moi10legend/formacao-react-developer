import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
    // 1. Configuração base do JS
    js.configs.recommended,

    // 2. Configuração do React
    {
        files: ["**/*.{js,mjs,cjs,jsx}"],
        ...pluginReact.configs.flat.recommended, // Puxa as regras recomendadas
        languageOptions: {
            ...pluginReact.configs.flat.recommended.languageOptions,
            globals: {
                ...globals.browser,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true, // <--- AQUI ESTÁ A CORREÇÃO MÁGICA
                },
            },
        },
        plugins: {
            react: pluginReact,
        },
        rules: {
            ...pluginReact.configs.flat.recommended.rules,
            "react/react-in-jsx-scope": "off", // Necessário para React 17+
            "react/prop-types": "off", // Opcional: desliga cobrança de PropTypes se preferir
        },
    },

    // 3. Configuração do Prettier (Sempre por último)
    {
        plugins: {
            prettier: prettierPlugin,
        },
        rules: {
            ...prettierConfig.rules,
            "prettier/prettier": "error",
        },
    },
];
