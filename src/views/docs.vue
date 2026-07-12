<template>
  <div class="min-h-screen grid-bg">
    <Navbar />

    <!-- Page Header -->
    <section class="pt-32 pb-16 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <span class="clay-badge mb-6 inline-block">
          <IconMdBookOpen width="14" height="14" class="mr-1" />
          文档中心
        </span>
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          <span class="shimmer-text">开发文档</span>
        </h1>
        <p class="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
          快速上手指南、API 参考、开发教程，帮助您充分利用 CloudMeet 平台
        </p>
        <!-- Search Bar -->
        <div class="max-w-xl mx-auto relative">
          <div class="clay-card p-1 flex items-center gap-3">
            <IconMdSearch width="20" height="20" class="text-slate-400 ml-3 flex-shrink-0" />
            <input type="text" placeholder="搜索文档..." class="clay-input flex-1 !py-2.5 !px-0 !bg-transparent" />
          </div>
        </div>
      </div>
    </section>

    <!-- Docs Content -->
    <section class="py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <!-- Sidebar Navigation -->
          <div class="lg:col-span-1">
            <div class="clay-card p-6 sticky top-24">
              <h3 class="text-cyan-300 font-semibold mb-4">文档目录</h3>
              <nav class="space-y-1">
                <a href="#quick-start" class="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-cyan-400/10 hover:text-cyan-300 transition-colors">
                  <IconMdChevronRight width="14" height="14" class="inline mr-2" />
                  快速开始
                </a>
                <a href="#api-ref" class="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-cyan-400/10 hover:text-cyan-300 transition-colors">
                  <IconMdChevronRight width="14" height="14" class="inline mr-2" />
                  API 参考
                </a>
                <a href="#sdk" class="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-cyan-400/10 hover:text-cyan-300 transition-colors">
                  <IconMdChevronRight width="14" height="14" class="inline mr-2" />
                  SDK 下载
                </a>
                <a href="#tutorials" class="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-cyan-400/10 hover:text-cyan-300 transition-colors">
                  <IconMdChevronRight width="14" height="14" class="inline mr-2" />
                  教程指南
                </a>
                <a href="#faq" class="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-cyan-400/10 hover:text-cyan-300 transition-colors">
                  <IconMdChevronRight width="14" height="14" class="inline mr-2" />
                  常见问题
                </a>
              </nav>
            </div>
          </div>

          <!-- Main Content -->
          <div class="lg:col-span-3 space-y-8">
            <!-- Quick Start -->
            <div id="quick-start" class="clay-card p-6 md:p-8">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 rounded-xl flex-center bg-gradient-to-br from-cyan-400/20 to-cyan-600/20">
                  <IconMdRocketLaunch width="24" height="24" class="text-cyan-400" />
                </div>
                <h2 class="text-2xl font-bold text-white">快速开始</h2>
              </div>

              <div class="space-y-6">
                <div>
                  <h3 class="text-lg font-semibold text-cyan-300 mb-2">1. 注册账号</h3>
                  <p class="text-slate-400 text-sm mb-3">访问 CloudMeet 官网，使用邮箱或手机号注册免费账号。</p>
                  <div class="bg-slate-900/50 rounded-xl p-4 font-mono text-sm text-slate-300 border border-cyan-400/10">
                    <p class="text-slate-500 mb-2"># 注册 API 调用示例</p>
                    <p><span class="text-purple-400">POST</span> /api/v1/auth/register</p>
                    <p class="text-slate-500 mt-2">{</p>
                    <p class="ml-4">"email": <span class="text-green-400">"user@example.com"</span>,</p>
                    <p class="ml-4">"password": <span class="text-green-400">"••••••••"</span></p>
                    <p>}</p>
                  </div>
                </div>

                <div>
                  <h3 class="text-lg font-semibold text-cyan-300 mb-2">2. 创建会议</h3>
                  <p class="text-slate-400 text-sm mb-3">登录后，您可以立即创建会议或邀请团队成员加入。</p>
                  <div class="bg-slate-900/50 rounded-xl p-4 font-mono text-sm text-slate-300 border border-cyan-400/10">
                    <p class="text-slate-500 mb-2"># 创建会议 API 调用示例</p>
                    <p><span class="text-purple-400">POST</span> /api/v1/meetings</p>
                    <p class="text-slate-500 mt-2">{</p>
                    <p class="ml-4">"title": <span class="text-green-400">"团队周会"</span>,</p>
                    <p class="ml-4">"duration": <span class="text-yellow-400">60</span>,</p>
                    <p class="ml-4">"participants": [<span class="text-green-400">"user1@company.com"</span>]</p>
                    <p>}</p>
                  </div>
                </div>

                <div>
                  <h3 class="text-lg font-semibold text-cyan-300 mb-2">3. 开始协作</h3>
                  <p class="text-slate-400 text-sm">加入会议，使用屏幕共享、白板、实时翻译等功能，享受高效协作体验。</p>
                </div>
              </div>
            </div>

            <!-- API Reference -->
            <div id="api-ref" class="clay-card p-6 md:p-8">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 rounded-xl flex-center bg-gradient-to-br from-purple-400/20 to-purple-600/20">
                  <IconMdCodeBrackets width="24" height="24" class="text-purple-400" />
                </div>
                <h2 class="text-2xl font-bold text-white">API 参考</h2>
              </div>

              <div class="space-y-4">
                <div class="bg-slate-900/50 rounded-xl p-4 border border-purple-400/10">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="px-2 py-0.5 rounded text-xs font-mono bg-green-400/20 text-green-400">GET</span>
                    <span class="font-mono text-sm text-slate-300">/api/v1/meetings</span>
                  </div>
                  <p class="text-slate-400 text-sm">获取会议列表，支持分页和筛选</p>
                </div>

                <div class="bg-slate-900/50 rounded-xl p-4 border border-purple-400/10">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="px-2 py-0.5 rounded text-xs font-mono bg-blue-400/20 text-blue-400">POST</span>
                    <span class="font-mono text-sm text-slate-300">/api/v1/meetings</span>
                  </div>
                  <p class="text-slate-400 text-sm">创建新会议，设置会议参数和参与者</p>
                </div>

                <div class="bg-slate-900/50 rounded-xl p-4 border border-purple-400/10">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="px-2 py-0.5 rounded text-xs font-mono bg-yellow-400/20 text-yellow-400">PUT</span>
                    <span class="font-mono text-sm text-slate-300">/api/v1/meetings/:id</span>
                  </div>
                  <p class="text-slate-400 text-sm">更新会议信息，如标题、时间、参与者等</p>
                </div>

                <div class="bg-slate-900/50 rounded-xl p-4 border border-purple-400/10">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="px-2 py-0.5 rounded text-xs font-mono bg-red-400/20 text-red-400">DELETE</span>
                    <span class="font-mono text-sm text-slate-300">/api/v1/meetings/:id</span>
                  </div>
                  <p class="text-slate-400 text-sm">取消并删除指定会议</p>
                </div>

                <div class="bg-slate-900/50 rounded-xl p-4 border border-purple-400/10">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="px-2 py-0.5 rounded text-xs font-mono bg-green-400/20 text-green-400">GET</span>
                    <span class="font-mono text-sm text-slate-300">/api/v1/transcripts/:id</span>
                  </div>
                  <p class="text-slate-400 text-sm">获取会议转录文本和智能纪要</p>
                </div>
              </div>
            </div>

            <!-- SDK -->
            <div id="sdk" class="clay-card p-6 md:p-8">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 rounded-xl flex-center bg-gradient-to-br from-green-400/20 to-green-600/20">
                  <IconMdPackageVariant width="24" height="24" class="text-green-400" />
                </div>
                <h2 class="text-2xl font-bold text-white">SDK 下载</h2>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="bg-slate-900/50 rounded-xl p-4 border border-green-400/10 hover:border-green-400/30 transition-colors">
                  <div class="flex items-center gap-3 mb-3">
                    <IconMdLanguage width="24" height="24" class="text-yellow-400" />
                    <span class="font-semibold text-white">JavaScript SDK</span>
                  </div>
                  <p class="text-slate-400 text-sm mb-3">适用于浏览器和 Node.js 环境</p>
                  <div class="bg-slate-950 rounded-lg p-2 font-mono text-xs text-slate-400">
                    npm install @cloudmeet/sdk
                  </div>
                </div>

                <div class="bg-slate-900/50 rounded-xl p-4 border border-green-400/10 hover:border-green-400/30 transition-colors">
                  <div class="flex items-center gap-3 mb-3">
                    <IconMdPython width="24" height="24" class="text-blue-400" />
                    <span class="font-semibold text-white">Python SDK</span>
                  </div>
                  <p class="text-slate-400 text-sm mb-3">适用于 Python 后端集成</p>
                  <div class="bg-slate-950 rounded-lg p-2 font-mono text-xs text-slate-400">
                    pip install cloudmeet-sdk
                  </div>
                </div>

                <div class="bg-slate-900/50 rounded-xl p-4 border border-green-400/10 hover:border-green-400/30 transition-colors">
                  <div class="flex items-center gap-3 mb-3">
                    <IconMdApple width="24" height="24" class="text-slate-300" />
                    <span class="font-semibold text-white">iOS SDK</span>
                  </div>
                  <p class="text-slate-400 text-sm mb-3">适用于 iOS 原生应用开发</p>
                  <div class="bg-slate-950 rounded-lg p-2 font-mono text-xs text-slate-400">
                    pod CloudMeetSDK
                  </div>
                </div>

                <div class="bg-slate-900/50 rounded-xl p-4 border border-green-400/10 hover:border-green-400/30 transition-colors">
                  <div class="flex items-center gap-3 mb-3">
                    <IconMdAndroid width="24" height="24" class="text-green-400" />
                    <span class="font-semibold text-white">Android SDK</span>
                  </div>
                  <p class="text-slate-400 text-sm mb-3">适用于 Android 原生应用开发</p>
                  <div class="bg-slate-950 rounded-lg p-2 font-mono text-xs text-slate-400">
                    implementation 'com.cloudmeet:sdk:2.0'
                  </div>
                </div>
              </div>
            </div>

            <!-- Tutorials -->
            <div id="tutorials" class="clay-card p-6 md:p-8">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 rounded-xl flex-center bg-gradient-to-br from-yellow-400/20 to-yellow-600/20">
                  <IconMdBookPlus width="24" height="24" class="text-yellow-400" />
                </div>
                <h2 class="text-2xl font-bold text-white">教程指南</h2>
              </div>

              <div class="space-y-4">
                <div class="flex items-start gap-4 p-4 bg-slate-900/30 rounded-xl hover:bg-slate-900/50 transition-colors">
                  <div class="w-10 h-10 rounded-lg flex-center bg-cyan-400/20 flex-shrink-0">
                    <span class="text-cyan-400 font-bold text-sm">01</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-white mb-1">5 分钟快速入门</h4>
                    <p class="text-slate-400 text-sm">从零开始创建您的第一个会议，邀请团队成员加入</p>
                    <div class="flex items-center gap-3 mt-2">
                      <span class="clay-badge text-xs">入门</span>
                      <span class="text-xs text-slate-500">阅读时间: 5 min</span>
                    </div>
                  </div>
                </div>

                <div class="flex items-start gap-4 p-4 bg-slate-900/30 rounded-xl hover:bg-slate-900/50 transition-colors">
                  <div class="w-10 h-10 rounded-lg flex-center bg-purple-400/20 flex-shrink-0">
                    <span class="text-purple-400 font-bold text-sm">02</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-white mb-1">API 集成指南</h4>
                    <p class="text-slate-400 text-sm">学习如何将 CloudMeet 集成到您的应用中</p>
                    <div class="flex items-center gap-3 mt-2">
                      <span class="clay-badge text-xs" style="border-color: rgba(139, 92, 246, 0.3); color: #a78bfa;">中级</span>
                      <span class="text-xs text-slate-500">阅读时间: 15 min</span>
                    </div>
                  </div>
                </div>

                <div class="flex items-start gap-4 p-4 bg-slate-900/30 rounded-xl hover:bg-slate-900/50 transition-colors">
                  <div class="w-10 h-10 rounded-lg flex-center bg-green-400/20 flex-shrink-0">
                    <span class="text-green-400 font-bold text-sm">03</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-white mb-1">企业级部署方案</h4>
                    <p class="text-slate-400 text-sm">大规模部署 CloudMeet，实现 SSO、LDAP 集成</p>
                    <div class="flex items-center gap-3 mt-2">
                      <span class="clay-badge text-xs" style="border-color: rgba(74, 222, 128, 0.3); color: #4ade80;">高级</span>
                      <span class="text-xs text-slate-500">阅读时间: 20 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- FAQ -->
            <div id="faq" class="clay-card p-6 md:p-8">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 rounded-xl flex-center bg-gradient-to-br from-pink-400/20 to-pink-600/20">
                  <IconMdHelpCircle width="24" height="24" class="text-pink-400" />
                </div>
                <h2 class="text-2xl font-bold text-white">常见问题</h2>
              </div>

              <div class="space-y-4">
                <details class="group bg-slate-900/30 rounded-xl overflow-hidden">
                  <summary class="flex items-center justify-between cursor-pointer p-4 hover:bg-slate-900/50 transition-colors">
                    <span class="font-semibold text-white">免费套餐有哪些限制？</span>
                    <IconMdChevronDown width="20" height="20" class="text-slate-400 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div class="px-4 pb-4 text-slate-400 text-sm">
                    免费套餐支持最多 40 人同时在线，单次会议最长 45 分钟。包含基础的视频通话和屏幕共享功能。升级专业版可解锁更多高级功能。
                  </div>
                </details>

                <details class="group bg-slate-900/30 rounded-xl overflow-hidden">
                  <summary class="flex items-center justify-between cursor-pointer p-4 hover:bg-slate-900/50 transition-colors">
                    <span class="font-semibold text-white">支持哪些操作系统？</span>
                    <IconMdChevronDown width="20" height="20" class="text-slate-400 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div class="px-4 pb-4 text-slate-400 text-sm">
                    CloudMeet 支持 Windows (10+)、macOS (11+)、iOS (14+)、Android (8+) 以及所有主流浏览器（Chrome、Firefox、Safari、Edge）。
                  </div>
                </details>

                <details class="group bg-slate-900/30 rounded-xl overflow-hidden">
                  <summary class="flex items-center justify-between cursor-pointer p-4 hover:bg-slate-900/50 transition-colors">
                    <span class="font-semibold text-white">数据安全如何保障？</span>
                    <IconMdChevronDown width="20" height="20" class="text-slate-400 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div class="px-4 pb-4 text-slate-400 text-sm">
                    我们采用 AES-256 端到端加密，所有数据传输使用 TLS 1.3 协议。服务器部署在符合 GDPR 标准的数据中心，支持数据本地化存储。
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-5xl font-bold mb-6">
          <span class="shimmer-text">还有疑问？</span>
        </h2>
        <p class="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
          我们的技术支持团队随时为您提供帮助
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button class="clay-btn text-lg px-8 py-4">
            <IconMdEmail width="20" height="20" />
            联系技术支持
          </button>
          <button class="px-8 py-4 rounded-xl text-slate-300 border border-slate-600 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-200 text-lg font-medium flex-center">
            <IconMdForum width="20" height="20" class="mr-2" />
            加入社区论坛
          </button>
        </div>
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
import IconMdChevronDown from '~icons/mdi/chevron-down'
import IconMdSearch from '~icons/mdi/magnify'
import IconMdRocketLaunch from '~icons/mdi/rocket-launch'
import IconMdCodeBrackets from '~icons/mdi/code-brackets'
import IconMdPackageVariant from '~icons/mdi/package-variant'
import IconMdBookPlus from '~icons/mdi/book-plus'
import IconMdBookOpen from '~icons/mdi/book-open'
import IconMdHelpCircle from '~icons/mdi/help-circle'
import IconMdLanguage from '~icons/mdi/language'
import IconMdPython from '~icons/mdi/alpha-p'
import IconMdApple from '~icons/mdi/apple'
import IconMdAndroid from '~icons/mdi/alpha-a'
import IconMdEmail from '~icons/mdi/email'
import IconMdForum from '~icons/mdi/forum'
</script>

<style scoped>
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>