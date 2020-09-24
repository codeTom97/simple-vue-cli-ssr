module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        "plugin:vue/essential",
        "eslint:recommended",
        "@vue/typescript/recommended",
        "@vue/prettier",
        "@vue/prettier/@typescript-eslint"
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        // 必须为4个空格
        indent: ["error", 4],
        // 禁止使用 var
        "no-var": "error",
        // 优先使用 interface 而不是 type
        "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
        // 生产环境 => 禁用console
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
    }
};
