# 基本规则

- 编码规范：强制使用 Vue 3 Composition API + `<script setup lang="ts">`。
- 目录结构：新页面必须放在 `src/views/` 下，API请求放在 `src/api/`，通用组件放在 `src/components/`。
- 样式规范：统一使用 UnoCSS 原子类，禁止使用内联样式或非标准CSS。
- 类型安全：所有变量、函数参数和返回值必须有明确的TypeScript类型定义。
- 代码质量：生成的代码需包含必要的注释，并通过ESLint校验。