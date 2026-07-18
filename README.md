# Portfolio Website

## 前端样式参考

### 组件与按钮

- https://uiverse.io/elements
- https://daisyui.com/components/
- https://www.designprompts.dev/
- https://cssbuttons.io/

### 综合灵感

- [Awwwards](https://www.awwwards.com/) — 高质量网站评选，交互和视觉都很强
- [CSS Design Awards](https://www.cssdesignawards.com/) — 偏创意站、动效站
- [The FWA](https://thefwa.com/) — 偏实验性、艺术向网页
- [SiteInspire](https://www.siteinspire.com/) — 按类型筛选优秀站点
- [Land-book](https://land-book.com/) — Landing page 合集，适合产品页审美

### UI / 产品界面

- [Dribbble](https://dribbble.com/) — 界面概念稿、组件审美
- [Behance](https://www.behance.net/) — 完整项目展示，偏品牌与产品
- [Mobbin](https://mobbin.com/) — 真实 App 截图流，偏移动端
- [Refero](https://refero.design/) — Web/App 真实界面参考
- [Page Flows](https://pageflows.com/) — 按流程看真实产品交互

### 字体 / 排版 / 视觉细节

- [Typewolf](https://www.typewolf.com/) — 字体搭配与网页排版
- [Fontpair](https://www.fontpair.co/) — 字体组合灵感
- [Httpster](https://httpster.net/) — 精选独立站点，审美偏干净

### 组件与设计系统

- [Component Gallery](https://component.gallery/) — 各家设计系统组件对比
- [UI Patterns](https://ui-patterns.com/) — 常见交互模式
- [SaaS Frame](https://www.saasframe.io/) — SaaS 产品页与界面参考

### 动效 / 创意前端

- [Codrops](https://tympanus.net/codrops/) — 创意前端 demo 与教程
- [CodePen](https://codepen.io/) — 小实验、动效片段
- [Lusion](https://lusion.co/) — 偏 3D / WebGL 审美（本身也是作品站）

> 快速找「好看官网」可优先：Awwwards → Land-book → SiteInspire → Mobbin / Refero

基于 Vue 3 + Vite 构建的个人作品集网站，部署于 GitHub Pages。

## 技术栈

- **框架**：Vue 3（Composition API）
- **构建工具**：Vite 6
- **部署**：GitHub Actions + GitHub Pages
- **包管理器**：npm

## 项目结构

```
.
├── .github/workflows/      # GitHub Actions 自动化部署
├── public/                 # 静态资源
│   └── images/             # 图片资源
├── src/
│   ├── assets/             # 样式、图片等会被打包处理的资源
│   │   └── images/
│   ├── components/         # Vue 组件
│   │   ├── AppHeader.vue       # 顶部导航栏（含下拉菜单）
│   │   ├── HeroSection.vue     # 首页主视觉
│   │   ├── AboutSection.vue    # 关于我
│   │   ├── PublicationSection.vue
│   │   ├── ProjectsSection.vue
│   │   ├── GallerySection.vue
│   │   └── ...
│   ├── data/               # 内容数据（JSON/JS 模块）
│   │   ├── about.js
│   │   ├── publications.js
│   │   ├── projects.js     # 项目列表，用于导航下拉菜单
│   │   ├── gallery.js
│   │   └── timeline.js
│   ├── styles/
│   │   └── global.css      # 全局 CSS 变量与基础样式
│   ├── views/
│   │   └── HomeView.vue    # 页面组装入口
│   ├── App.vue
│   └── main.js             # 应用入口
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 开发

```bash
# 安装依赖
npm install

# 启动本地开发服务器
npm run dev
```

开发服务器默认地址为 `http://localhost:5173/`。

## 构建

```bash
npm run build
```

构建产物输出到 `dist/` 目录。

## 部署

### 方式一：GitHub Actions 自动部署（推荐）

仓库已配置 `.github/workflows/deploy.yml`。每次向 `main` 分支推送代码时，会自动构建并部署到 GitHub Pages。

### 方式二：手动部署到 gh-pages

确保 `vite.config.js` 中的 `base` 与仓库名一致：

```js
export default defineConfig({
  base: '/murmur_biography/',
})
```

然后执行：

```bash
npm run deploy
```

该命令会先执行 `npm run build`，再通过 `gh-pages` 将 `dist/` 目录推送到 `gh-pages` 分支。

## 常用内容更新

- **导航栏下拉菜单项目**：修改 `src/data/projects.js` 中的 `title` 字段。
- **导航栏分类标签 / 样式**：修改 `src/components/AppHeader.vue`。
- **各板块内容**：分别修改 `src/data/` 下的对应数据文件。
- **全局样式变量**：修改 `src/styles/global.css`。

## 注意事项

- 本项目使用 `scoped` CSS 与少量全局样式变量结合管理样式。
- 修改 `vite.config.js` 中的 `base` 后，需要重新构建并部署才能生效。
