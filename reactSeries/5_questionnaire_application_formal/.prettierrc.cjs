// 用 .cjs 后缀：package.json 里有 "type": "module"，
// Prettier 2.x 读不了 ESM 格式的配置文件，CommonJS 才认。
module.exports = {
  // 箭头函数只有一个参数的时候可以忽略括号
  arrowParens: 'avoid',
  // 括号内部不要出现空格
  bracketSpacing: true,
  // 行结束符使用 Unix 格式
  endOfLine: 'lf',
  // true: Put > on the last line instead of at a new line
  bracketSameLine: false,
  // 行宽
  printWidth: 100,
  // 换行方式
  proseWrap: 'preserve',
  // 分号
  semi: false,
  // 使用单引号
  singleQuote: true,
  // 缩进
  tabWidth: 2,
  // 使用 tab 缩进
  useTabs: false,
  // 后置逗号，多行对象、数组在最后一行增加逗号
  trailingComma: 'es5',
}
