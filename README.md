# XINDU.SITE 错误页项目

## 项目简介

本项目为一套高颜值、现代化、极具科技感的错误状态码页面集合，风格仿灵犀AIGC，适配移动端，支持多种常见HTTP错误码。每个页面均有独特的CSS3动态背景特效（如炫彩气泡、流星、线条等），并结合毛玻璃效果，极具未来感。

## 技术栈
- [Vue 3](https://vuejs.org/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- 纯CSS3动画与毛玻璃特效

## 支持的错误码页面
- 401、402、403、404、405、500、501、502、503、504、505、522
- 每个页面均有独特的动态背景和主色调
- 支持访问 `/maintain` 显示站点维护倒计时页面

## 主要功能
- 每个错误码页面均有专属的动态背景特效（气泡、流星、线条等）
- 毛玻璃（backdrop-blur）+ 渐变色彩，极具科技感
- 页面主标题统一为“XINDU.SITE 错误页”
- “返回上一页”按钮，底部版权说明
- 禁止F12、右键、Ctrl+U等查看源码操作
- 完全响应式，适配移动端

## 快速使用

1. 安装依赖
   ```bash
   npm install
   ```
2. 启动开发环境
   ```bash
   npm run dev
   ```
3. 访问页面
   - 例如：http://localhost:5173/404
   - 支持所有配置的错误码路径

## 目录结构
```
├── src
│   ├── App.vue
│   ├── main.js
│   ├── index.css
│   ├── router.js
│   └── pages
│       ├── Error401.vue ... Error522.vue
│       └── bg
│           ├── BgLines.vue
│           ├── BgMeteor.vue
│           └── BgGlow.vue
├── public
│   └── ...
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## 定制说明
- 如需自定义背景特效，可在 `src/pages/bg/` 目录下新增或修改CSS3动画组件。
- 如需调整主色调或动画风格，可在 `ErrorLayout.vue` 中修改对应映射。
- 支持自定义错误码页面文案、按钮、交互等。

## 参考与灵感
- [uiverse.io/StealthWorm/spotty-horse-48](https://uiverse.io/StealthWorm/spotty-horse-48)
