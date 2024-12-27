module.exports = {
    env: {
        node: true,  // 启用 Node.js 环境
        es2020: true, // 启用 ECMAScript 2020
      },
    parser: '@babel/eslint-parser',  // 使用 Babel 解析器
    parserOptions: {
      requireConfigFile: false,  // 禁用 Babel 配置文件检查
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    extends: ['eslint:recommended', 'plugin:vue/essential'],
    rules: {
      // 你的自定义规则
    },
  };
  