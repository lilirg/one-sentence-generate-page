<template>
  <div class="p-8">
    <h2 class="text-2xl font-bold mb-6">用户资料</h2>
    <el-card>
      <template #header>
        <span class="font-semibold">个人信息</span>
      </template>
      <el-form label-width="100px" class="max-w-160">
        <el-form-item label="用户名">
          <el-input v-model="form.username" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email" placeholder="请输入邮箱" />
        </el-form-item>
        <el-form-item label="简介">
          <el-input v-model="form.bio" type="textarea" :rows="3" placeholder="请输入简介" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSave">保存</el-button>
          <el-button @click="handleReset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'

const form = reactive({
  username: '',
  email: '',
  bio: '',
})

function handleSave() {
  ElMessage.success('保存成功')
}

function handleReset() {
  form.username = ''
  form.email = ''
  form.bio = ''
}
</script>