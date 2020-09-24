/**
 * @description 对git add提交的内容进行eslint校验
 * @author lvhaoxian
 */

module.exports = {
    "src/**/*.{js,ts,vue}": ["vue-cli-service lint", "git add"]
};
