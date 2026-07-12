<template>
  <footer class="mt-auto bg-gradient-to-b from-transparent to-black/20 border-t border-cyan-400/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 rounded-lg flex-center bg-gradient-to-br from-cyan-400 to-cyan-600">
              <IconMdVideoAccount width="20" height="20" color="#fff" />
            </div>
            <span class="text-lg font-bold gradient-text">CloudMeet</span>
          </div>
          <p class="text-slate-400 text-sm max-w-md mb-4">
            CloudMeet 是新一代线上会议平台，提供高清视频、实时翻译、智能纪要等功能，让远程协作更高效。
          </p>
          <div class="flex gap-3">
            <a href="#" class="w-10 h-10 rounded-lg flex-center clay-card text-cyan-300 hover:text-cyan-200 transition-colors">
              <IconMdWeChat width="20" height="20" />
            </a>
            <a href="#" class="w-10 h-10 rounded-lg flex-center clay-card text-cyan-300 hover:text-cyan-200 transition-colors">
              <IconMdWeibo width="20" height="20" />
            </a>
            <a href="#" class="w-10 h-10 rounded-lg flex-center clay-card text-cyan-300 hover:text-cyan-200 transition-colors">
              <IconMdGithub width="20" height="20" />
            </a>
            <a href="#" class="w-10 h-10 rounded-lg flex-center clay-card text-cyan-300 hover:text-cyan-200 transition-colors">
              <IconMdTwitter width="20" height="20" />
            </a>
          </div>
        </div>

        <!-- Product -->
        <div>
          <h4 class="text-cyan-300 font-semibold mb-4">产品</h4>
          <ul class="space-y-2">
            <li><router-link to="/services" class="text-slate-400 hover:text-cyan-300 text-sm transition-colors">功能特性</router-link></li>
            <li><router-link to="/pricing" class="text-slate-400 hover:text-cyan-300 text-sm transition-colors">价格方案</router-link></li>
            <li><a href="#" class="text-slate-400 hover:text-cyan-300 text-sm transition-colors">下载应用</a></li>
            <li><a href="#" class="text-slate-400 hover:text-cyan-300 text-sm transition-colors">更新日志</a></li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h4 class="text-cyan-300 font-semibold mb-4">支持</h4>
          <ul class="space-y-2">
            <li><router-link to="/docs" class="text-slate-400 hover:text-cyan-300 text-sm transition-colors">文档中心</router-link></li>
            <li><a href="#" class="text-slate-400 hover:text-cyan-300 text-sm transition-colors">帮助中心</a></li>
            <li><a href="#" class="text-slate-400 hover:text-cyan-300 text-sm transition-colors">联系我们</a></li>
            <li><router-link to="/about" class="text-slate-400 hover:text-cyan-300 text-sm transition-colors">关于我们</router-link></li>
          </ul>
        </div>
      </div>

      <div class="clay-divider mt-8 mb-4"></div>

      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-slate-500 text-xs">
          &copy; 2026 CloudMeet. All rights reserved.
        </p>
        <div class="flex gap-4">
          <a href="#" class="text-slate-500 hover:text-cyan-300 text-xs transition-colors">隐私政策</a>
          <a href="#" class="text-slate-500 hover:text-cyan-300 text-xs transition-colors">服务条款</a>
          <a href="#" class="text-slate-500 hover:text-cyan-300 text-xs transition-colors">Cookie 设置</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import IconMdVideoAccount from '~icons/mdi/video-account'
import IconMdWeChat from '~icons/mdi/wechat'
import IconMdWeibo from '~icons/mdi/web'
import IconMdGithub from '~icons/mdi/github'
import IconMdTwitter from '~icons/mdi/twitter'
</script>

<style scoped>
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>