<template>
  <div class="p-8">
    <h2 class="text-2xl font-bold mb-6">用户详情</h2>
    <el-card>
      <template #header>
        <span class="font-semibold">动态路由示例</span>
      </template>
      <div class="text-center py-8">
        <el-icon class="text-6xl text-primary mb-4" :size="60">
          <User />
        </el-icon>
        <h3 class="text-xl font-semibold mb-2">用户 ID：<span class="text-primary">{{ id }}</span></h3>
        <p class="text-gray-500 mb-6">此页面通过动态路由 /user/:id 访问</p>
        <el-button @click="router.push('/')" type="primary">返回首页</el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { User } from '@element-plus/icons-vue'

const route = useRoute()
const router = useRouter()
const id = route.params.id as string
</script>