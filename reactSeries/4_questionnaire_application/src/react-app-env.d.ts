/// <reference types="react-scripts" />

// react-scripts 只声明了 *.module.css / *.module.scss 等 CSS Modules 形式，
// 没有声明普通样式文件的副作用导入，补上以免新版 TypeScript 报 TS2882。
declare module '*.css'
