/**
 * @description git commit 钩子拦截器
 */

module.exports = {
    hooks: {
        "pre-commit": "lint-staged"
    }
};
