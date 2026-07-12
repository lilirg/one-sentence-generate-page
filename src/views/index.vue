<template>
  <div class="min-h-screen grid-bg">
    <Navbar />

    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 px-4">
      <!-- Background Effects -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl float-animation"></div>
        <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl float-animation" style="animation-delay: 2s;"></div>
      </div>

      <div class="max-w-7xl mx-auto text-center relative z-10">
        <div class="inline-block mb-6">
          <span class="clay-badge px-4 py-2 text-sm">
            <IconMdSparkles width="14" height="14" class="mr-1 inline" />
            全新 2.0 版本发布
          </span>
        </div>

        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span class="shimmer-text">连接无限可能</span>
          <br />
          <span class="text-white">让远程协作更高效</span>
        </h1>

        <p class="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          CloudMeet 提供高清视频通话、实时翻译、智能纪要等强大功能，
          <br class="hidden md:block" />
          让全球团队无缝协作，随时随地激发创意。
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button class="clay-btn text-lg px-8 py-4 glow-pulse">
            <IconMdPlay width="20" height="20" />
            立即体验
          </button>
          <button class="px-8 py-4 rounded-xl text-slate-300 border border-slate-600 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-200 text-lg font-medium flex-center">
            <IconMdPlayCircle width="20" height="20" class="mr-2" />
            观看演示
          </button>
        </div>

        <!-- Hero Image / Mockup -->
        <div class="relative max-w-4xl mx-auto">
          <div class="clay-card p-2 border-glow">
            <div class="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden aspect-video flex-center">
              <div class="text-center">
                <IconMdVideoAccount width="80" height="80" class="mx-auto mb-4 text-cyan-400/50" />
                <p class="text-slate-500 text-lg">会议界面预览</p>
                <p class="text-slate-600 text-sm mt-2">支持 1000+ 人同时在线</p>
              </div>
            </div>
          </div>
          <!-- Floating Elements -->
          <div class="absolute -top-6 -right-6 clay-card p-4 float-animation hidden lg:flex">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-green-400/20 flex-center">
                <IconMdCheck width="20" height="20" color="#4ade80" />
              </div>
              <div>
                <p class="text-xs text-slate-400">会议质量</p>
                <p class="text-sm font-semibold text-green-400">99.9%</p>
              </div>
            </div>
          </div>
          <div class="absolute -bottom-4 -left-4 clay-card p-3 float-animation hidden lg:flex" style="animation-delay: 1s;">
            <div class="flex items-center gap-2">
              <IconMdUsers width="20" height="20" class="text-cyan-400" />
              <span class="text-sm font-semibold">2,847 在线</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            <span class="gradient-text">核心功能</span>
          </h2>
          <p class="text-slate-400 max-w-xl mx-auto">
            我们提供最先进的会议技术，让您的团队协作无边界
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Feature 1 -->
          <div class="clay-card p-6 group">
            <div class="w-14 h-14 rounded-xl flex-center bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 mb-4 group-hover:scale-110 transition-transform">
              <IconMdVideo width="28" height="28" class="text-cyan-400" />
            </div>
            <h3 class="text-xl font-semibold mb-2 text-white">4K 超清视频</h3>
            <p class="text-slate-400 text-sm mb-4">
              支持 4K 分辨率视频通话，AI 降噪技术，让您清晰传达每一个表情和想法。
            </p>
            <div class="flex items-center text-cyan-400 text-sm font-medium">
              了解更多 <IconMdChevronRight width="16" height="16" class="ml-1" />
            </div>
          </div>

          <!-- Feature 2 -->
          <div class="clay-card p-6 group">
            <div class="w-14 h-14 rounded-xl flex-center bg-gradient-to-br from-purple-400/20 to-purple-600/20 mb-4 group-hover:scale-110 transition-transform">
              <IconMdTranslate width="28" height="28" class="text-purple-400" />
            </div>
            <h3 class="text-xl font-semibold mb-2 text-white">实时翻译</h3>
            <p class="text-slate-400 text-sm mb-4">
              支持 40+ 种语言的实时字幕翻译，打破语言障碍，让全球团队无障碍沟通。
            </p>
            <div class="flex items-center text-purple-400 text-sm font-medium">
              了解更多 <IconMdChevronRight width="16" height="16" class="ml-1" />
            </div>
          </div>

          <!-- Feature 3 -->
          <div class="clay-card p-6 group">
            <div class="w-14 h-14 rounded-xl flex-center bg-gradient-to-br from-green-400/20 to-green-600/20 mb-4 group-hover:scale-110 transition-transform">
              <IconMdClipboardCheck width="28" height="28" class="text-green-400" />
            </div>
            <h3 class="text-xl font-semibold mb-2 text-white">智能纪要</h3>
            <p class="text-slate-400 text-sm mb-4">
              AI 自动记录会议内容，生成结构化纪要，关键决策和行动项一目了然。
            </p>
            <div class="flex items-center text-green-400 text-sm font-medium">
              了解更多 <IconMdChevronRight width="16" height="16" class="ml-1" />
            </div>
          </div>

          <!-- Feature 4 -->
          <div class="clay-card p-6 group">
            <div class="w-14 h-14 rounded-xl flex-center bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 mb-4 group-hover:scale-110 transition-transform">
              <IconMdWhiteBalanceSunny width="28" height="28" class="text-yellow-400" />
            </div>
            <h3 class="text-xl font-semibold mb-2 text-white">虚拟背景</h3>
            <p class="text-slate-400 text-sm mb-4">
              AI 驱动的背景虚化和虚拟背景，保护隐私的同时提升专业形象。
            </p>
            <div class="flex items-center text-yellow-400 text-sm font-medium">
              了解更多 <IconMdChevronRight width="16" height="16" class="ml-1" />
            </div>
          </div>

          <!-- Feature 5 -->
          <div class="clay-card p-6 group">
            <div class="w-14 h-14 rounded-xl flex-center bg-gradient-to-br from-pink-400/20 to-pink-600/20 mb-4 group-hover:scale-110 transition-transform">
              <IconMdWhiteboard width="28" height="28" class="text-pink-400" />
            </div>
            <h3 class="text-xl font-semibold mb-2 text-white">在线白板</h3>
            <p class="text-slate-400 text-sm mb-4">
              协作式数字白板，支持思维导图、流程图、手绘等多种创作方式。
            </p>
            <div class="flex items-center text-pink-400 text-sm font-medium">
              了解更多 <IconMdChevronRight width="16" height="16" class="ml-1" />
            </div>
          </div>

          <!-- Feature 6 -->
          <div class="clay-card p-6 group">
            <div class="w-14 h-14 rounded-xl flex-center bg-gradient-to-br from-red-400/20 to-red-600/20 mb-4 group-hover:scale-110 transition-transform">
              <IconMdShieldCheck width="28" height="28" class="text-red-400" />
            </div>
            <h3 class="text-xl font-semibold mb-2 text-white">端到端加密</h3>
            <p class="text-slate-400 text-sm mb-4">
              军事级 AES-256 加密，确保您的会议内容安全无忧，符合 GDPR 标准。
            </p>
            <div class="flex items-center text-red-400 text-sm font-medium">
              了解更多 <IconMdChevronRight width="16" height="16" class="ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="clay-card p-8 md:p-12">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="text-center">
              <p class="text-3xl md:text-4xl font-bold gradient-text mb-2">10M+</p>
              <p class="text-slate-400 text-sm">活跃用户</p>
            </div>
            <div class="text-center">
              <p class="text-3xl md:text-4xl font-bold gradient-text mb-2">100K+</p>
              <p class="text-slate-400 text-sm">企业客户</p>
            </div>
            <div class="text-center">
              <p class="text-3xl md:text-4xl font-bold gradient-text mb-2">99.9%</p>
              <p class="text-slate-400 text-sm">可用性</p>
            </div>
            <div class="text-center">
              <p class="text-3xl md:text-4xl font-bold gradient-text mb-2">150+</p>
              <p class="text-slate-400 text-sm">支持国家</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-5xl font-bold mb-6">
          <span class="shimmer-text">准备好开始了吗？</span>
        </h2>
        <p class="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
          加入超过 1000 万用户的行列，体验前所未有的远程协作方式。
          免费开始，无需信用卡。
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
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/header/Navbar.vue'
import IconMdPlay from '~icons/mdi/play'
import IconMdPlayCircle from '~icons/mdi/play-circle'
import IconMdChevronRight from '~icons/mdi/chevron-right'
import IconMdVideo from '~icons/mdi/video'
import IconMdTranslate from '~icons/mdi/translate'
import IconMdClipboardCheck from '~icons/mdi/clipboard-check'
import IconMdWhiteBalanceSunny from '~icons/mdi/white-balance-sunny'
import IconMdWhiteboard from '~icons/mdi/whiteboard'
import IconMdShieldCheck from '~icons/mdi/shield-check'
import IconMdSparkles from '~icons/mdi/sparkles'
import IconMdUsers from '~icons/mdi/users'
import IconMdRocket from '~icons/mdi/rocket'
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