<template>
  <div class="p-8">
    <h2 class="text-2xl font-bold mb-6">关于</h2>
    <el-card>
      <div class="text-center py-8">
        <el-icon class="text-6xl text-primary mb-4" :size="60">
          <InfoFilled />
        </el-icon>
        <h3 class="text-xl font-semibold mb-2">One Sentence Generate Page</h3>
        <p class="text-gray-500 mb-6">一句话生成页面 - 现代化 Vue 3 项目模板</p>
        <el-descriptions :column="1" border>
          <el-descriptions-item label="前端框架">Vue 3 + Composition API</el-descriptions-item>
          <el-descriptions-item label="构建工具">Vite</el-descriptions-item>
          <el-descriptions-item label="开发语言">TypeScript</el-descriptions-item>
          <el-descriptions-item label="路由管理">Vue Router + vite-plugin-pages</el-descriptions-item>
          <el-descriptions-item label="状态管理">Pinia + 持久化</el-descriptions-item>
          <el-descriptions-item label="UI 组件库">Element Plus</el-descriptions-item>
          <el-descriptions-item label="CSS 方案">UnoCSS</el-descriptions-item>
          <el-descriptions-item label="HTTP 请求">Axios</el-descriptions-item>
        </el-descriptions>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { InfoFilled } from '@element-plus/icons-vue'
</script>