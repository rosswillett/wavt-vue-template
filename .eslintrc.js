module.exports = {
    env: {
        node: true,
        es6: true,
    },
    extends: [
        "plugin:vue/vue3-essential",
        "plugin:vue/vue3-strongly-recommended",
        "eslint:recommended",
        "@vue/typescript/recommended",
        "@vue/prettier",
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parserOptions: {
        ecmaVersion: 2018,
        parser: "@typescript-eslint/parser",
        sourceType: "module",
    },
    rules: {
        "vue/multi-word-component-names": "off",
        'vue/no-unused-vars': 'warn',
        "no-debugger": "warn",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",
            "multiline": "never"
        }],
    },
};
