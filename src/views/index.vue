<template>
  <div class="p-8">
    <h2 class="text-2xl font-bold mb-6">首页</h2>

    <el-card class="mb-6">
      <template #header>
        <span class="font-semibold">计数器示例 (Pinia + 持久化)</span>
      </template>
      <div class="flex items-center gap-4">
        <el-button @click="counter.decrement()" type="danger" round>-</el-button>
        <span class="text-2xl font-bold text-primary">{{ counter.count }}</span>
        <el-button @click="counter.increment()" type="primary" round>+</el-button>
        <el-button @click="counter.reset()" type="info" plain>重置</el-button>
      </div>
      <p class="mt-4 text-gray-500">
        双倍值：<span class="text-lg font-semibold text-success">{{ counter.doubleCount }}</span>
      </p>
    </el-card>

    <el-card>
      <template #header>
        <span class="font-semibold">路由示例</span>
      </template>
      <div class="flex flex-wrap gap-4">
        <el-button @click="router.push('/about')" type="success">关于页</el-button>
        <el-button @click="router.push('/user/profile')" type="warning">用户资料</el-button>
        <el-button @click="router.push('/user/123')" type="info">用户详情 (动态路由 /user/:id)</el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useCounterStore } from '@/stores/counter'

const router = useRouter()
const counter = useCounterStore()
</script>