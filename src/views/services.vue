<template>
  <div class="min-h-screen grid-bg">
    <Navbar />

    <!-- Page Header -->
    <section class="pt-32 pb-16 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <span class="clay-badge mb-6 inline-block">
          <IconMdSparkles width="14" height="14" class="mr-1" />
          专业服务
        </span>
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          <span class="shimmer-text">全方位会议解决方案</span>
        </h1>
        <p class="text-lg text-slate-400 max-w-2xl mx-auto">
          从个人通话到企业级会议，我们提供完整的线上会议服务生态
        </p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Service 1: 视频会议 -->
          <div class="clay-card p-8 group relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="relative z-10">
              <div class="flex items-center justify-between mb-6">
                <div class="w-16 h-16 rounded-2xl flex-center bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 group-hover:scale-110 transition-transform">
                  <IconMdVideo width="32" height="32" class="text-cyan-400" />
                </div>
                <span class="clay-badge">热门</span>
              </div>
              <h3 class="text-2xl font-semibold mb-3 text-white">高清视频会议</h3>
              <p class="text-slate-400 mb-6">
                支持 4K 超清画质，最多 1000 人同时在线。AI 智能降噪、自动取景、背景虚化，让每次会议都专业呈现。
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center gap-2 text-sm text-slate-300">
                  <IconMdCheck width="16" height="16" class="text-cyan-400" /> 4K 超清画质
                </li>
                <li class="flex items-center gap-2 text-sm text-slate-300">
                  <IconMdCheck width="16" height="16" class="text-cyan-400" /> 1000 人同时在线
                </li>
                <li class="flex items-center gap-2 text-sm text-slate-300">
                  <IconMdCheck width="16" height="16" class="text-cyan-400" /> AI 智能降噪
                </li>
              </ul>
              <button class="text-cyan-400 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                了解详情 <IconMdChevronRight width="16" height="16" />
              </button>
            </div>
          </div>

          <!-- Service 2: 屏幕共享 -->
          <div class="clay-card p-8 group relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="relative z-10">
              <div class="flex items-center justify-between mb-6">
                <div class="w-16 h-16 rounded-2xl flex-center bg-gradient-to-br from-purple-400/20 to-purple-600/20 group-hover:scale-110 transition-transform">
                  <IconMdMonitor width="32" height="32" class="text-purple-400" />
                </div>
                <span class="clay-badge" style="border-color: rgba(139, 92, 246, 0.3); color: #a78bfa;">实用</span>
              </div>
              <h3 class="text-2xl font-semibold mb-3 text-white">屏幕共享与协作</h3>
              <p class="text-slate-400 mb-6">
                一键共享屏幕，支持多窗口切换。实时标注、画笔工具，让远程指导如同面对面。
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center gap-2 text-sm text-slate-300">
                  <IconMdCheck width="16" height="16" class="text-purple-400" /> 多窗口共享
                </li>
                <li class="flex items-center gap-2 text-sm text-slate-300">
                  <IconMdCheck width="16" height="16" class="text-purple-400" /> 实时标注
                </li>
                <li class="flex items-center gap-2 text-sm text-slate-300">
                  <IconMdCheck width="16" height="16" class="text-purple-400" /> 跨平台兼容
                </li>
              </ul>
              <button class="text-purple-400 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                了解详情 <IconMdChevronRight width="16" height="16" />
              </button>
            </div>
          </div>

          <!-- Service 3: 实时翻译 -->
          <div class="clay-card p-8 group relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="relative z-10">
              <div class="flex items-center justify-between mb-6">
                <div class="w-16 h-16 rounded-2xl flex-center bg-gradient-to-br from-green-400/20 to-green-600/20 group-hover:scale-110 transition-transform">
                  <IconMdTranslate width="32" height="32" class="text-green-400" />
                </div>
                <span class="clay-badge" style="border-color: rgba(74, 222, 128, 0.3); color: #4ade80;">AI</span>
              </div>
              <h3 class="text-2xl font-semibold mb-3 text-white">实时翻译服务</h3>
              <p class="text-slate-400 mb-6">
                支持 40+ 种语言的实时字幕翻译，AI 驱动高精度翻译，打破语言障碍。
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center gap-2 text-sm text-slate-300">
                  <IconMdCheck width="16" height="16" class="text-green-400" /> 40+ 语言支持
                </li>
                <li class="flex items-center gap-2 text-sm text-slate-300">
                  <IconMdCheck width="16" height="16" class="text-green-400" /> 实时字幕
                </li>
                <li class="flex items-center gap-2 text-sm text-slate-300">
                  <IconMdCheck width="16" height="16" class="text-green-400" /> 多语种混译
                </li>
              </ul>
              <button class="text-green-400 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                了解详情 <IconMdChevronRight width="16" height="16" />
              </button>
            </div>
          </div>

          <!-- Service 4: 智能纪要 -->
          <div class="clay-card p-8 group relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="relative z-10">
              <div class="flex items-center justify-between mb-6">
                <div class="w-16 h-16 rounded-2xl flex-center bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 group-hover:scale-110 transition-transform">
                  <IconMdClipboardCheck width="32" height="32" class="text-yellow-400" />
                </div>
                <span class="clay-badge" style="border-color: rgba(250, 204, 21, 0.3); color: #facc15;">AI</span>
              </div>
              <h3 class="text-2xl font-semibold mb-3 text-white">AI 智能纪要</h3>
              <p class="text-slate-400 mb-6">
                自动记录会议内容，生成结构化纪要，提取关键决策和行动项，支持导出多种格式。
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center gap-2 text-sm text-slate-300">
                  <IconMdCheck width="16" height="16" class="text-yellow-400" /> 自动记录
                </li>
                <li class="flex items-center gap-2 text-sm text-slate-300">
                  <IconMdCheck width="16" height="16" class="text-yellow-400" /> 智能摘要
                </li>
                <li class="flex items-center gap-2 text-sm text-slate-300">
                  <IconMdCheck width="16" height="16" class="text-yellow-400" /> 行动项追踪
                </li>
              </ul>
              <button class="text-yellow-400 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                了解详情 <IconMdChevronRight width="16" height="16" />
              </button>
            </div>
          </div>

          <!-- Service 5: 虚拟背景 -->
          <div class="clay-card p-8 group relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-pink-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="relative z-10">
              <div class="flex items-center justify-between mb-6">
                <div class="w-16 h-16 rounded-2xl flex-center bg-gradient-to-br from-pink-400/20 to-pink-600/20 group-hover:scale-110 transition-transform">
                  <IconMdImage width="32" height="32" class="text-pink-400" />
                </div>
              </div>
              <h3 class="text-2xl font-semibold mb-3 text-white">虚拟背景</h3>
              <p class="text-slate-400 mb-6">
                AI 驱动的背景虚化和虚拟背景，内置 100+ 场景，自定义上传专属背景图。
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center gap-2 text-sm text-slate-300">
                  <IconMdCheck width="16" height="16" class="text-pink-400" /> 100+ 场景模板
                </li>
                <li class="flex items-center gap-2 text-sm text-slate-300">
                  <IconMdCheck width="16" height="16" class="text-pink-400" /> 自定义上传
                </li>
                <li class="flex items-center gap-2 text-sm text-slate-300">
                  <IconMdCheck width="16" height="16" class="text-pink-400" /> AI 抠像
                </li>
              </ul>
              <button class="text-pink-400 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                了解详情 <IconMdChevronRight width="16" height="16" />
              </button>
            </div>
          </div>

          <!-- Service 6: 会议录制 -->
          <div class="clay-card p-8 group relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-red-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="relative z-10">
              <div class="flex items-center justify-between mb-6">
                <div class="w-16 h-16 rounded-2xl flex-center bg-gradient-to-br from-red-400/20 to-red-600/20 group-hover:scale-110 transition-transform">
                  <IconMdRecord width="32" height="32" class="text-red-400" />
                </div>
              </div>
              <h3 class="text-2xl font-semibold mb-3 text-white">会议录制与回放</h3>
              <p class="text-slate-400 mb-6">
                一键录制高清会议视频，自动上传云端，生成回放链接，方便错过会议的同事查看。
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center gap-2 text-sm text-slate-300">
                  <IconMdCheck width="16" height="16" class="text-red-400" /> 高清录制
                </li>
                <li class="flex items-center gap-2 text-sm text-slate-300">
                  <IconMdCheck width="16" height="16" class="text-red-400" /> 云端存储
                </li>
                <li class="flex items-center gap-2 text-sm text-slate-300">
                  <IconMdCheck width="16" height="16" class="text-red-400" /> 智能搜索
                </li>
              </ul>
              <button class="text-red-400 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                了解详情 <IconMdChevronRight width="16" height="16" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Integration Section -->
    <section class="py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="clay-card p-8 md:p-12">
          <div class="text-center mb-10">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">
              <span class="gradient-text">无缝集成</span>
            </h2>
            <p class="text-slate-400 max-w-xl mx-auto">
              与您的常用工具无缝连接，打造高效工作流
            </p>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
            <div class="clay-card p-4 flex-center flex-col gap-2 hover:scale-105 transition-transform">
              <IconMdMicrosoft width="32" height="32" class="text-white" />
              <span class="text-xs text-slate-400">Microsoft</span>
            </div>
            <div class="clay-card p-4 flex-center flex-col gap-2 hover:scale-105 transition-transform">
              <IconMdSlack width="32" height="32" class="text-white" />
              <span class="text-xs text-slate-400">Slack</span>
            </div>
            <div class="clay-card p-4 flex-center flex-col gap-2 hover:scale-105 transition-transform">
              <IconMdNotepad width="32" height="32" class="text-white" />
              <span class="text-xs text-slate-400">Notion</span>
            </div>
            <div class="clay-card p-4 flex-center flex-col gap-2 hover:scale-105 transition-transform">
              <IconMdJira width="32" height="32" class="text-white" />
              <span class="text-xs text-slate-400">Jira</span>
            </div>
            <div class="clay-card p-4 flex-center flex-col gap-2 hover:scale-105 transition-transform">
              <IconMdGoogle width="32" height="32" class="text-white" />
              <span class="text-xs text-slate-400">Google</span>
            </div>
            <div class="clay-card p-4 flex-center flex-col gap-2 hover:scale-105 transition-transform">
              <IconMdDropbox width="32" height="32" class="text-white" />
              <span class="text-xs text-slate-400">Dropbox</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-5xl font-bold mb-6">
          <span class="shimmer-text">开始使用 CloudMeet</span>
        </h2>
        <p class="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
          免费开始，无需信用卡。随时升级或取消。
        </p>
        <button class="clay-btn text-lg px-10 py-4 glow-pulse">
          <IconMdRocket width="22" height="22" />
          免费开始使用
        </button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="mt-auto bg-gradient-to-b from-transparent to-black/20 border-t border-cyan-400/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center gap-2 mb-4">
              <div class="w-8 h-8 rounded-lg flex-center bg-gradient-to-br from-cyan-400 to-cyan-600">
                <IconMdVideoAccount width="20" height="20" color="#fff" />
              </div>
              <span class="text-lg font-bold gradient-text">CloudMeet</span>
            </div>
            <p class="text-slate-400 text-sm max-w-md mb-4">
              CloudMeet 是新一代线上会议平台，提供高清视频、实时翻译、智能纪要等功能。
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
            </div>
          </div>
          <div>
            <h4 class="text-cyan-300 font-semibold mb-4">产品</h4>
            <ul class="space-y-2">
              <li><router-link to="/services" class="text-slate-400 hover:text-cyan-300 text-sm transition-colors">功能特性</router-link></li>
              <li><router-link to="/pricing" class="text-slate-400 hover:text-cyan-300 text-sm transition-colors">价格方案</router-link></li>
            </ul>
          </div>
          <div>
            <h4 class="text-cyan-300 font-semibold mb-4">支持</h4>
            <ul class="space-y-2">
              <li><router-link to="/docs" class="text-slate-400 hover:text-cyan-300 text-sm transition-colors">文档中心</router-link></li>
              <li><router-link to="/about" class="text-slate-400 hover:text-cyan-300 text-sm transition-colors">关于我们</router-link></li>
            </ul>
          </div>
        </div>
        <div class="clay-divider mt-8 mb-4"></div>
        <p class="text-slate-500 text-xs text-center">&copy; 2026 CloudMeet. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/header/Navbar.vue'
import IconMdChevronRight from '~icons/mdi/chevron-right'
import IconMdVideo from '~icons/mdi/video'
import IconMdMonitor from '~icons/mdi/monitor'
import IconMdTranslate from '~icons/mdi/translate'
import IconMdClipboardCheck from '~icons/mdi/clipboard-check'
import IconMdImage from '~icons/mdi/image'
import IconMdRecord from '~icons/mdi/record'
import IconMdSparkles from '~icons/mdi/sparkles'
import IconMdCheck from '~icons/mdi/check'
import IconMdRocket from '~icons/mdi/rocket'
import IconMdMicrosoft from '~icons/mdi/microsoft'
import IconMdSlack from '~icons/mdi/chat'
import IconMdNotepad from '~icons/mdi/file-document-outline'
import IconMdJira from '~icons/mdi/alpha-j'
import IconMdGoogle from '~icons/mdi/google'
import IconMdDropbox from '~icons/mdi/dropbox'
</script>

<style scoped>
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>