/**
 * @description git commit 钩子拦截器
 * @author lvhaoxian
 */

module.exports = {
    hooks: {
        "pre-commit": "lint-staged"
    }
};
