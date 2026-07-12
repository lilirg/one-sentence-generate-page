<template>
  <el-container class="h-full">
    <el-header class="flex-between px-6 bg-white shadow-sm">
      <div class="flex items-center gap-4">
        <h1 class="text-lg font-bold text-primary">One Sentence Generate Page</h1>
      </div>
      <el-menu
        :default-active="route.path"
        mode="horizontal"
        :ellipsis="false"
        router
        class="border-0"
      >
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/about">关于</el-menu-item>
        <el-menu-item index="/user/profile">用户</el-menu-item>
      </el-menu>
    </el-header>
    <el-main class="bg-gray-50">
      <router-view />
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>