# 基本规则

## 编码规范
- 强制使用 Vue 3 Composition API + `<script setup lang="ts">`
- 所有变量、函数参数和返回值必须有明确的 TypeScript 类型定义
- 生成的代码需包含必要的注释，并通过 ESLint 校验

## 目录结构
- 新页面必须放在 `src/views/` 下
- API 请求放在 `src/api/`
- 通用组件放在 `src/components/`
- 状态管理放在 `src/stores/`
- 工具函数放在 `src/utils/`

## 页面开发规范
- **不使用公共布局模板（layout），每个页面必须独立开发**
- 每个页面自行导入和包含头部（Header）和脚部（Footer）组件
- 禁止在 `src/layouts/` 目录下创建布局文件
- 禁止使用 `<router-view>` 包裹页面内容

## 样式规范
- 统一使用 UnoCSS 原子类，禁止使用内联样式或非标准 CSS
- 响应式设计：移动端优先，适配手机、平板、桌面端
- 链接要禁用下划线（使用 `no-underline` 类）

## 图标与资源
- 使用 `unplugin-icons` 导入图标
- 图标来源：Material Design Icons (`mdi:*`)
- 推荐使用 SVG 图标，不使用 Emoji 作为 UI 图标

## 开发工具
- 使用 Skill：`ui-ux-pro-max`
- 遵循 UI/UX 最佳实践：可访问性、性能、动画规范
- 使用 Claymorphism 设计风格：软陶土质感卡片、阴影、渐变
- 主题色为橙色系，保持视觉一致性