<template>
  <div class="min-h-screen grid-bg">
    <Navbar />

    <!-- Page Header -->
    <section class="pt-32 pb-16 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <span class="clay-badge mb-6 inline-block">
          <IconMdCash width="14" height="14" class="mr-1" />
          价格方案
        </span>
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          <span class="shimmer-text">简单透明的定价</span>
        </h1>
        <p class="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
          选择最适合您的方案，随时升级或降级
        </p>

        <!-- Billing Toggle -->
        <div class="flex items-center justify-center gap-4">
          <span class="text-slate-300" :class="annual ? 'font-semibold' : 'text-slate-500'">月付</span>
          <button class="w-14 h-7 rounded-full relative transition-colors" :class="annual ? 'bg-cyan-400' : 'bg-slate-600'" @click="annual = !annual">
            <div class="absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white transition-transform" :class="annual ? 'translate-x-7' : ''"></div>
          </button>
          <span class="text-slate-300" :class="annual ? 'font-semibold' : 'text-slate-500'">
            年付
            <span class="text-xs text-green-400 ml-1">省20%</span>
          </span>
        </div>
      </div>
    </section>

    <!-- Pricing Cards -->
    <section class="py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <!-- Free Plan -->
          <div class="clay-card p-6 md:p-8">
            <div class="mb-6">
              <h3 class="text-xl font-semibold text-white mb-2">免费版</h3>
              <p class="text-slate-400 text-sm">适合个人用户日常使用</p>
            </div>
            <div class="mb-6">
              <div class="flex items-baseline gap-1">
                <span class="text-4xl font-bold text-white">¥0</span>
                <span class="text-slate-400">/月</span>
              </div>
              <p class="text-xs text-slate-500 mt-1">永久免费，无需信用卡</p>
            </div>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center gap-2 text-sm text-slate-300">
                <IconMdCheck width="16" height="16" class="text-cyan-400 flex-shrink-0" />
                最多 40 人同时在线
              </li>
              <li class="flex items-center gap-2 text-sm text-slate-300">
                <IconMdCheck width="16" height="16" class="text-cyan-400 flex-shrink-0" />
                45 分钟会议时长限制
              </li>
              <li class="flex items-center gap-2 text-sm text-slate-300">
                <IconMdCheck width="16" height="16" class="text-cyan-400 flex-shrink-0" />
                基础屏幕共享
              </li>
              <li class="flex items-center gap-2 text-sm text-slate-300">
                <IconMdCheck width="16" height="16" class="text-cyan-400 flex-shrink-0" />
                1080P 视频画质
              </li>
              <li class="flex items-center gap-2 text-sm text-slate-500">
                <IconMdClose width="16" height="16" class="flex-shrink-0" />
                智能纪要
              </li>
              <li class="flex items-center gap-2 text-sm text-slate-500">
                <IconMdClose width="16" height="16" class="flex-shrink-0" />
                实时翻译
              </li>
            </ul>
            <button class="w-full py-3 rounded-xl border border-cyan-400/30 text-cyan-300 font-medium hover:bg-cyan-400/10 transition-all">
              开始使用
            </button>
          </div>

          <!-- Pro Plan (Featured) -->
          <div class="clay-card p-6 md:p-8 relative border-2 border-cyan-400/40 glow-pulse">
            <div class="absolute -top-4 left-1/2 -translate-x-1/2">
              <span class="clay-badge px-4 py-1.5 text-sm bg-gradient-to-r from-cyan-400 to-cyan-600 border-none text-white font-semibold">
                最受欢迎
              </span>
            </div>
            <div class="mb-6">
              <h3 class="text-xl font-semibold text-white mb-2">专业版</h3>
              <p class="text-slate-400 text-sm">适合小团队和专业人士</p>
            </div>
            <div class="mb-6">
              <div class="flex items-baseline gap-1">
                <span class="text-4xl font-bold gradient-text">
                  {{ annual ? '¥68' : '¥89' }}
                </span>
                <span class="text-slate-400">/月</span>
              </div>
              <p class="text-xs text-slate-500 mt-1">{{ annual ? '年付 ¥816/年' : '月付，随时取消' }}</p>
            </div>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center gap-2 text-sm text-slate-300">
                <IconMdCheck width="16" height="16" class="text-cyan-400 flex-shrink-0" />
                最多 500 人同时在线
              </li>
              <li class="flex items-center gap-2 text-sm text-slate-300">
                <IconMdCheck width="16" height="16" class="text-cyan-400 flex-shrink-0" />
                无限制会议时长
              </li>
              <li class="flex items-center gap-2 text-sm text-slate-300">
                <IconMdCheck width="16" height="16" class="text-cyan-400 flex-shrink-0" />
                高级屏幕共享 + 标注
              </li>
              <li class="flex items-center gap-2 text-sm text-slate-300">
                <IconMdCheck width="16" height="16" class="text-cyan-400 flex-shrink-0" />
                4K 超清画质
              </li>
              <li class="flex items-center gap-2 text-sm text-slate-300">
                <IconMdCheck width="16" height="16" class="text-cyan-400 flex-shrink-0" />
                AI 智能纪要
              </li>
              <li class="flex items-center gap-2 text-sm text-slate-300">
                <IconMdCheck width="16" height="16" class="text-cyan-400 flex-shrink-0" />
                30 种实时翻译
              </li>
            </ul>
            <button class="clay-btn w-full text-center justify-center">
              立即订阅
            </button>
          </div>

          <!-- Enterprise Plan -->
          <div class="clay-card p-6 md:p-8">
            <div class="mb-6">
              <h3 class="text-xl font-semibold text-white mb-2">企业版</h3>
              <p class="text-slate-400 text-sm">适合大型团队和企业</p>
            </div>
            <div class="mb-6">
              <div class="flex items-baseline gap-1">
                <span class="text-4xl font-bold text-white">
                  {{ annual ? '¥198' : '¥249' }}
                </span>
                <span class="text-slate-400">/月</span>
              </div>
              <p class="text-xs text-slate-500 mt-1">{{ annual ? '年付 ¥2376/年' : '月付，需签约' }}</p>
            </div>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center gap-2 text-sm text-slate-300">
                <IconMdCheck width="16" height="16" class="text-cyan-400 flex-shrink-0" />
                无限制参会人数
              </li>
              <li class="flex items-center gap-2 text-sm text-slate-300">
                <IconMdCheck width="16" height="16" class="text-cyan-400 flex-shrink-0" />
                全部专业版功能
              </li>
              <li class="flex items-center gap-2 text-sm text-slate-300">
                <IconMdCheck width="16" height="16" class="text-cyan-400 flex-shrink-0" />
                SSO / LDAP 集成
              </li>
              <li class="flex items-center gap-2 text-sm text-slate-300">
                <IconMdCheck width="16" height="16" class="text-cyan-400 flex-shrink-0" />
                专属客户经理
              </li>
              <li class="flex items-center gap-2 text-sm text-slate-300">
                <IconMdCheck width="16" height="16" class="text-cyan-400 flex-shrink-0" />
                99.99% SLA 保障
              </li>
              <li class="flex items-center gap-2 text-sm text-slate-300">
                <IconMdCheck width="16" height="16" class="text-cyan-400 flex-shrink-0" />
                私有化部署选项
              </li>
            </ul>
            <button class="w-full py-3 rounded-xl border border-cyan-400/30 text-cyan-300 font-medium hover:bg-cyan-400/10 transition-all">
              联系销售
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature Comparison -->
    <section class="py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="clay-card p-6 md:p-8 overflow-x-auto">
          <h2 class="text-2xl font-bold text-white mb-6 text-center">功能对比</h2>
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-cyan-400/10">
                <th class="text-left py-4 pr-4 text-slate-400 font-medium">功能</th>
                <th class="text-center py-4 px-4 text-slate-300 font-medium">免费版</th>
                <th class="text-center py-4 px-4 text-cyan-400 font-bold">专业版</th>
                <th class="text-center py-4 pl-4 text-slate-300 font-medium">企业版</th>
              </tr>
            </thead>
            <tbody class="text-slate-400">
              <tr class="border-b border-cyan-400/5 hover:bg-cyan-400/5">
                <td class="py-3 pr-4">参会人数</td>
                <td class="text-center py-3 px-4">40 人</td>
                <td class="text-center py-3 px-4 text-cyan-300">500 人</td>
                <td class="text-center py-3 pl-4">无限制</td>
              </tr>
              <tr class="border-b border-cyan-400/5 hover:bg-cyan-400/5">
                <td class="py-3 pr-4">会议时长</td>
                <td class="text-center py-3 px-4">45 分钟</td>
                <td class="text-center py-3 px-4 text-cyan-300">无限制</td>
                <td class="text-center py-3 pl-4">无限制</td>
              </tr>
              <tr class="border-b border-cyan-400/5 hover:bg-cyan-400/5">
                <td class="py-3 pr-4">视频画质</td>
                <td class="text-center py-3 px-4">1080P</td>
                <td class="text-center py-3 px-4 text-cyan-300">4K</td>
                <td class="text-center py-3 pl-4">4K</td>
              </tr>
              <tr class="border-b border-cyan-400/5 hover:bg-cyan-400/5">
                <td class="py-3 pr-4">屏幕共享</td>
                <td class="text-center py-3 px-4">
                  <IconMdCheck width="16" height="16" class="inline text-cyan-400" />
                </td>
                <td class="text-center py-3 px-4 text-cyan-300">
                  <IconMdCheck width="16" height="16" class="inline" />
                </td>
                <td class="text-center py-3 pl-4">
                  <IconMdCheck width="16" height="16" class="inline" />
                </td>
              </tr>
              <tr class="border-b border-cyan-400/5 hover:bg-cyan-400/5">
                <td class="py-3 pr-4">AI 智能纪要</td>
                <td class="text-center py-3 px-4 text-slate-600">
                  <IconMdClose width="16" height="16" class="inline" />
                </td>
                <td class="text-center py-3 px-4 text-cyan-300">
                  <IconMdCheck width="16" height="16" class="inline" />
                </td>
                <td class="text-center py-3 pl-4">
                  <IconMdCheck width="16" height="16" class="inline" />
                </td>
              </tr>
              <tr class="border-b border-cyan-400/5 hover:bg-cyan-400/5">
                <td class="py-3 pr-4">实时翻译</td>
                <td class="text-center py-3 px-4 text-slate-600">
                  <IconMdClose width="16" height="16" class="inline" />
                </td>
                <td class="text-center py-3 px-4 text-cyan-300">30 种</td>
                <td class="text-center py-3 pl-4">40+ 种</td>
              </tr>
              <tr class="hover:bg-cyan-400/5">
                <td class="py-3 pr-4">SSO / LDAP</td>
                <td class="text-center py-3 px-4 text-slate-600">
                  <IconMdClose width="16" height="16" class="inline" />
                </td>
                <td class="text-center py-3 px-4 text-slate-600">
                  <IconMdClose width="16" height="16" class="inline" />
                </td>
                <td class="text-center py-3 pl-4">
                  <IconMdCheck width="16" height="16" class="inline" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 px-4">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-10">
          <span class="gradient-text">常见问题</span>
        </h2>
        <div class="space-y-4">
          <details class="group clay-card overflow-hidden">
            <summary class="flex items-center justify-between cursor-pointer p-5 hover:bg-cyan-400/5 transition-colors">
              <span class="font-semibold text-white">我可以随时更改或取消订阅吗？</span>
              <IconMdChevronDown width="20" height="20" class="text-slate-400 group-open:rotate-180 transition-transform" />
            </summary>
            <div class="px-5 pb-5 text-slate-400 text-sm">
              当然可以。您可以随时在账户设置中升级、降级或取消订阅。取消后，您仍可在当前计费周期结束前使用已付费的功能。
            </div>
          </details>
          <details class="group clay-card overflow-hidden">
            <summary class="flex items-center justify-between cursor-pointer p-5 hover:bg-cyan-400/5 transition-colors">
              <span class="font-semibold text-white">支持哪些支付方式？</span>
              <IconMdChevronDown width="20" height="20" class="text-slate-400 group-open:rotate-180 transition-transform" />
            </summary>
            <div class="px-5 pb-5 text-slate-400 text-sm">
              我们支持信用卡（Visa、MasterCard）、支付宝、微信支付、银行转账等方式。企业版客户还支持对公转账和开具发票。
            </div>
          </details>
          <details class="group clay-card overflow-hidden">
            <summary class="flex items-center justify-between cursor-pointer p-5 hover:bg-cyan-400/5 transition-colors">
              <span class="font-semibold text-white">有免费试用吗？</span>
              <IconMdChevronDown width="20" height="20" class="text-slate-400 group-open:rotate-180 transition-transform" />
            </summary>
            <div class="px-5 pb-5 text-slate-400 text-sm">
              是的，所有付费方案都提供 14 天免费试用，无需信用卡。试用期间您可以体验所有高级功能。
            </div>
          </details>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-5xl font-bold mb-6">
          <span class="shimmer-text">选择 CloudMeet，开启高效协作</span>
        </h2>
        <p class="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
          14 天免费试用所有高级功能，无需信用卡
        </p>
        <button class="clay-btn text-lg px-10 py-4 glow-pulse">
          <IconMdRocket width="22" height="22" />
          免费开始试用
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
import IconMdCheck from '~icons/mdi/check'
import IconMdChevronDown from '~icons/mdi/chevron-down'
import IconMdRocket from '~icons/mdi/rocket'
import IconMdCash from '~icons/mdi/cash'
import { ref } from 'vue'

const annual = ref(false)
</script>

<style scoped>
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>