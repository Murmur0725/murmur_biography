# Components 组件说明

本目录存放 Portfolio 网站的所有 Vue 组件。组件按页面区块划分，每个组件职责单一，数据与视图分离。

## 组件总览

| 组件 | 所属区块 | 功能 | 数据来源 |
|------|---------|------|---------|
| `AppHeader.vue` | 顶部导航 | 品牌 logo + 主导航锚点（About / Publication / Projects / Gallery） | — |
| `HeroSection.vue` | 首页 Hero | 编排主副标题、经历时间轴、人像、轴线；协调悬停状态 | `data/timeline.js` |
| `HeroTitle.vue` | 首页 Hero | 主标题 MURMUR + 副标题（HCI Designer/Architect/Curator） | 内置默认值 |
| `SectionAxis.vue` | 通用 | 左侧装饰轴线（竖线 + 顶部粗黑块），Hero/About/Publication 共用 | CSS 变量定制 |
| `ResumeTimeline.vue` | 首页 Hero | 经历时间轴列表，悬停时 emit 事件给父级 | props.items |
| `ParticlePortrait.vue` | 首页 Hero | 人像图 + hover 粒子爆裂动画 + 悬停诗句显现 | 内置图片 + poemLines |
| `ExperiencePreview.vue` | 首页 Hero | 悬停经历时的详情卡（日期/类型/标题/角色/描述） | props.activeItem |
| `AboutSection.vue` | About 区块 | 自我介绍 bio + 亮点数据 + 技能 tags + 获奖 + 志愿服务 | `data/about.js` |
| `PublicationSection.vue` | Publication 区块 | 编排标题 + 论文列表 | `data/publications.js` |
| `PublicationItem.vue` | Publication 区块 | 单条论文卡片（序号/作者/标题/出处/链接） | props.paper |

## 页面结构

```
HomeView.vue
├── AppHeader              ← 顶部导航（固定）
├── HeroSection            ← 首页主区域
│   ├── SectionAxis        ← 左侧轴线
│   ├── HeroTitle          ← 主副标题
│   ├── ResumeTimeline     ← 经历时间轴
│   └── ParticlePortrait   ← 人像 + 粒子动画
│       └── ExperiencePreview  ← 悬停详情卡
├── AboutSection           ← 自我介绍区
│   └── SectionAxis        ← 左侧轴线（复用）
└── PublicationSection     ← 论文发表区
    ├── SectionAxis        ← 左侧轴线（复用）
    └── PublicationItem ×5 ← 单条论文（循环）
```

## 数据文件

数据独立存放在 `src/data/`，改文案不碰 `.vue`：

| 文件 | 用途 | 引用组件 |
|------|------|---------|
| `timeline.js` | 6 段经历（教育 + 实习） | `HeroSection.vue` |
| `about.js` | bio / 亮点 / 技能 / 获奖 / 志愿 | `AboutSection.vue` |
| `publications.js` | 5 篇论文 | `PublicationSection.vue` |

## 修改指引

| 想改的内容 | 去哪个文件 |
|-----------|-----------|
| 经历/论文文案 | `src/data/*.js` |
| 主副标题文字/字号 | `HeroTitle.vue` |
| 人像 hover 诗句 | `ParticlePortrait.vue` 的 `poemLines` |
| 导航链接 | `AppHeader.vue` |
| 轴线粗细/位置 | `SectionAxis.vue` + 各 Section 的 `--section-axis-*` 变量 |
| 页面区块顺序 | `HomeView.vue` |
| 全局颜色/字体 | `src/styles/global.css` |
