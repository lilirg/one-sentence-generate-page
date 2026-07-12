<template>
  <div class="min-h-screen grid-bg">
    <!-- Header -->
    <header class="navbar fixed-top w-full z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center gap-2">
            <div class="w-10 h-10 rounded-xl flex-center bg-gradient-to-br from-cyan-400 to-cyan-600 glow-pulse">
              <IconMdVideoAccount width="24" height="24" color="#fff" />
            </div>
            <span class="text-xl font-bold gradient-text">CloudMeet</span>
          </div>
          <div class="hidden md:flex items-center gap-2">
            <router-link to="/" class="nav-link">首页</router-link>
            <router-link to="/services" class="nav-link">服务</router-link>
            <router-link to="/docs" class="nav-link">文档</router-link>
            <router-link to="/pricing" class="nav-link">价格</router-link>
            <router-link to="/about" class="nav-link active">关于</router-link>
          </div>
          <div class="flex items-center gap-3">
            <button class="px-4 py-2 rounded-xl text-cyan-300 border border-cyan-400/30 hover:bg-cyan-400/10 transition-all duration-200 text-sm font-medium">登录</button>
            <button class="clay-btn text-sm px-5 py-2">免费开始</button>
          </div>
          <button class="md:hidden p-2 text-cyan-300" @click="menuOpen = !menuOpen">
            <IconMdMenu width="24" height="24" v-if="!menuOpen" />
            <IconMdClose width="24" height="24" v-else />
          </button>
        </div>
        <div v-if="menuOpen" class="md:hidden py-4 border-t border-cyan-400/10">
          <div class="flex flex-col gap-2">
            <router-link to="/" class="nav-link" @click="menuOpen = false">首页</router-link>
            <router-link to="/services" class="nav-link" @click="menuOpen = false">服务</router-link>
            <router-link to="/docs" class="nav-link" @click="menuOpen = false">文档</router-link>
            <router-link to="/pricing" class="nav-link" @click="menuOpen = false">价格</router-link>
            <router-link to="/about" class="nav-link" @click="menuOpen = false">关于</router-link>
          </div>
        </div>
      </div>
    </header>

    <!-- Page Header -->
    <section class="pt-32 pb-16 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <span class="clay-badge mb-6 inline-block">
          <IconMdPeople width="14" height="14" class="mr-1" />
          关于我们
        </span>
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          <span class="shimmer-text">让全球协作无边界</span>
        </h1>
        <p class="text-lg text-slate-400 max-w-2xl mx-auto">
          CloudMeet 致力于为全球团队提供最优质的线上会议体验
        </p>
      </div>
    </section>

    <!-- Story Section -->
    <section class="py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              <span class="gradient-text">我们的故事</span>
            </h2>
            <div class="space-y-4 text-slate-400">
              <p>
                CloudMeet 成立于 2023 年，诞生于一个简单而坚定的信念：<span class="text-cyan-300">优秀的想法应该跨越地理边界自由流动</span>。
              </p>
              <p>
                在远程工作成为新常态的今天，我们看到了无数团队因缺乏高效的协作工具而受困。我们的创始团队由来自 Google、Microsoft 和腾讯的资深工程师组成，他们带着对技术的热爱和对用户体验的执着，决心打造一款真正理解远程协作需求的会议平台。
              </p>
              <p>
                从最初只有 5 人的小团队，到如今服务全球 10 万+ 企业的平台，CloudMeet 始终坚持以用户为中心，持续创新，追求卓越。
              </p>
            </div>
          </div>
          <div class="relative">
            <div class="clay-card p-8">
              <div class="grid grid-cols-2 gap-4">
                <div class="text-center p-4 bg-cyan-400/5 rounded-xl">
                  <IconMdRocketLaunch width="32" height="32" class="text-cyan-400 mx-auto mb-2" />
                  <p class="text-sm text-slate-400">创新驱动</p>
                </div>
                <div class="text-center p-4 bg-purple-400/5 rounded-xl">
                  <IconMdStar width="32" height="32" class="text-purple-400 mx-auto mb-2" />
                  <p class="text-sm text-slate-400">品质至上</p>
                </div>
                <div class="text-center p-4 bg-green-400/5 rounded-xl">
                  <IconMdHandShake width="32" height="32" class="text-green-400 mx-auto mb-2" />
                  <p class="text-sm text-slate-400">用户第一</p>
                </div>
                <div class="text-center p-4 bg-yellow-400/5 rounded-xl">
                  <IconMdGlobe width="32" height="32" class="text-yellow-400 mx-auto mb-2" />
                  <p class="text-sm text-slate-400">开放协作</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            <span class="gradient-text">核心团队</span>
          </h2>
          <p class="text-slate-400 max-w-xl mx-auto">
            来自全球顶尖科技公司的精英团队，共同构建 CloudMeet
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Team Member 1 -->
          <div class="clay-card p-6 text-center group">
            <div class="w-20 h-20 rounded-2xl mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-cyan-600 flex-center group-hover:scale-110 transition-transform">
              <span class="text-2xl font-bold text-white">LW</span>
            </div>
            <h4 class="font-semibold text-white mb-1">林伟</h4>
            <p class="text-cyan-400 text-sm mb-3">创始人 & CEO</p>
            <p class="text-slate-400 text-xs mb-4">前 Google 高级工程师，15 年视频会议领域经验</p>
            <div class="flex justify-center gap-2">
              <a href="#" class="w-8 h-8 rounded-md flex-center text-slate-400 hover:text-cyan-400 transition-colors">
                <IconMdLinkedin width="16" height="16" />
              </a>
              <a href="#" class="w-8 h-8 rounded-md flex-center text-slate-400 hover:text-cyan-400 transition-colors">
                <IconMdTwitter width="16" height="16" />
              </a>
            </div>
          </div>

          <!-- Team Member 2 -->
          <div class="clay-card p-6 text-center group">
            <div class="w-20 h-20 rounded-2xl mx-auto mb-4 bg-gradient-to-br from-purple-400 to-purple-600 flex-center group-hover:scale-110 transition-transform">
              <span class="text-2xl font-bold text-white">ZC</span>
            </div>
            <h4 class="font-semibold text-white mb-1">陈雪</h4>
            <p class="text-purple-400 text-sm mb-3">CTO</p>
            <p class="text-slate-400 text-xs mb-4">前 Microsoft Azure 架构师，AI/ML 专家</p>
            <div class="flex justify-center gap-2">
              <a href="#" class="w-8 h-8 rounded-md flex-center text-slate-400 hover:text-purple-400 transition-colors">
                <IconMdLinkedin width="16" height="16" />
              </a>
              <a href="#" class="w-8 h-8 rounded-md flex-center text-slate-400 hover:text-purple-400 transition-colors">
                <IconMdGithub width="16" height="16" />
              </a>
            </div>
          </div>

          <!-- Team Member 3 -->
          <div class="clay-card p-6 text-center group">
            <div class="w-20 h-20 rounded-2xl mx-auto mb-4 bg-gradient-to-br from-green-400 to-green-600 flex-center group-hover:scale-110 transition-transform">
              <span class="text-2xl font-bold text-white">YH</span>
            </div>
            <h4 class="font-semibold text-white mb-1">杨辉</h4>
            <p class="text-green-400 text-sm mb-3">CPO</p>
            <p class="text-slate-400 text-xs mb-4">前腾讯产品设计总监，10 年用户体验设计经验</p>
            <div class="flex justify-center gap-2">
              <a href="#" class="w-8 h-8 rounded-md flex-center text-slate-400 hover:text-green-400 transition-colors">
                <IconMdLinkedin width="16" height="16" />
              </a>
              <a href="#" class="w-8 h-8 rounded-md flex-center text-slate-400 hover:text-green-400 transition-colors">
                <IconMdDribbble width="16" height="16" />
              </a>
            </div>
          </div>

          <!-- Team Member 4 -->
          <div class="clay-card p-6 text-center group">
            <div class="w-20 h-20 rounded-2xl mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-yellow-600 flex-center group-hover:scale-110 transition-transform">
              <span class="text-2xl font-bold text-white">ML</span>
            </div>
            <h4 class="font-semibold text-white mb-1">马超</h4>
            <p class="text-yellow-400 text-sm mb-3">VP of Engineering</p>
            <p class="text-slate-400 text-xs mb-4">前 AWS 技术负责人，分布式系统专家</p>
            <div class="flex justify-center gap-2">
              <a href="#" class="w-8 h-8 rounded-md flex-center text-slate-400 hover:text-yellow-400 transition-colors">
                <IconMdLinkedin width="16" height="16" />
              </a>
              <a href="#" class="w-8 h-8 rounded-md flex-center text-slate-400 hover:text-yellow-400 transition-colors">
                <IconMdGithub width="16" height="16" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            <span class="gradient-text">我们的价值观</span>
          </h2>
          <p class="text-slate-400 max-w-xl mx-auto">
            这些核心价值观指引着 CloudMeet 的每一步发展
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="clay-card p-8 text-center">
            <div class="w-16 h-16 rounded-2xl mx-auto mb-6 flex-center bg-gradient-to-br from-cyan-400/20 to-cyan-600/20">
              <IconMdLightbulb width="32" height="32" class="text-cyan-400" />
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">持续创新</h3>
            <p class="text-slate-400 text-sm">
              我们不断探索前沿技术，将 AI、机器学习等创新融入产品，为用户提供超越期待的体验。
            </p>
          </div>

          <div class="clay-card p-8 text-center">
            <div class="w-16 h-16 rounded-2xl mx-auto mb-6 flex-center bg-gradient-to-br from-green-400/20 to-green-600/20">
              <IconMdShieldCheck width="32" height="32" class="text-green-400" />
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">安全可信</h3>
            <p class="text-slate-400 text-sm">
              用户数据安全是我们的首要任务。我们采用行业最高标准的安全协议，确保您的会议内容私密安全。
            </p>
          </div>

          <div class="clay-card p-8 text-center">
            <div class="w-16 h-16 rounded-2xl mx-auto mb-6 flex-center bg-gradient-to-br from-purple-400/20 to-purple-600/20">
              <IconMdHeart width="32" height="32" class="text-purple-400" />
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">用户至上</h3>
            <p class="text-slate-400 text-sm">
              每一个功能设计都从用户实际需求出发，我们倾听用户反馈，持续优化产品体验。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 px-4">
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
              <p class="text-3xl md:text-4xl font-bold gradient-text mb-2">150+</p>
              <p class="text-slate-400 text-sm">覆盖国家</p>
            </div>
            <div class="text-center">
              <p class="text-3xl md:text-4xl font-bold gradient-text mb-2">99.9%</p>
              <p class="text-slate-400 text-sm">服务可用性</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20 px-4">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-10">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            <span class="gradient-text">联系我们</span>
          </h2>
          <p class="text-slate-400 max-w-xl mx-auto">
            有任何问题或建议？我们随时倾听
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="clay-card p-6 text-center">
            <div class="w-14 h-14 rounded-xl mx-auto mb-4 flex-center bg-cyan-400/10">
              <IconMdEmail width="28" height="28" class="text-cyan-400" />
            </div>
            <h4 class="font-semibold text-white mb-2">邮箱</h4>
            <p class="text-slate-400 text-sm">support@cloudmeet.com</p>
          </div>
          <div class="clay-card p-6 text-center">
            <div class="w-14 h-14 rounded-xl mx-auto mb-4 flex-center bg-green-400/10">
              <IconMdPhone width="28" height="28" class="text-green-400" />
            </div>
            <h4 class="font-semibold text-white mb-2">电话</h4>
            <p class="text-slate-400 text-sm">400-888-8888</p>
          </div>
          <div class="clay-card p-6 text-center">
            <div class="w-14 h-14 rounded-xl mx-auto mb-4 flex-center bg-purple-400/10">
              <IconMdMapMarker width="28" height="28" class="text-purple-400" />
            </div>
            <h4 class="font-semibold text-white mb-2">地址</h4>
            <p class="text-slate-400 text-sm">北京市海淀区中关村科技园</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-5xl font-bold mb-6">
          <span class="shimmer-text">加入 CloudMeet 大家庭</span>
        </h2>
        <p class="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
          我们正在招聘优秀的工程师、设计师和产品经理，一起改变远程协作的方式
        </p>
        <button class="clay-btn text-lg px-10 py-4 glow-pulse">
          <IconMdPeople width="22" height="22" />
          查看职位
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
import { ref } from 'vue'
import IconMdVideoAccount from '~icons/mdi/video-account'
import IconMdMenu from '~icons/mdi/menu'
import IconMdClose from '~icons/mdi/close'
import IconMdPeople from '~icons/mdi/people'
import IconMdRocketLaunch from '~icons/mdi/rocket-launch'
import IconMdHandShake from '~icons/mdi/handshake'
import IconMdLightbulb from '~icons/mdi/lightbulb'
import IconMdShieldCheck from '~icons/mdi/shield-check'
import IconMdHeart from '~icons/mdi/heart'
import IconMdEmail from '~icons/mdi/email'
import IconMdPhone from '~icons/mdi/phone'
import IconMdMapMarker from '~icons/mdi/map-marker'
import IconMdLinkedin from '~icons/mdi/linkedin'
import IconMdTwitter from '~icons/mdi/twitter'
import IconMdGithub from '~icons/mdi/github'
import IconMdDribbble from '~icons/mdi/dribbble'
import IconMdStar from '~icons/mdi/star'
import IconMdGlobe from '~icons/mdi/globe'
import IconMdWeChat from '~icons/mdi/wechat'
import IconMdWeibo from '~icons/mdi/web'

const menuOpen = ref(false)
</script>

<style scoped>
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar {
  z-index: 100;
}
</style>