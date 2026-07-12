<template>
  <div class="min-h-screen grid-bg">
    <Navbar />

    <!-- Page Header -->
    <section class="pt-32 pb-16 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <span class="clay-badge mb-6 inline-block">
          <IconMdStar width="14" height="14" class="mr-1" />
          客户案例
        </span>
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          <span class="shimmer-text">全球客户的信赖之选</span>
        </h1>
        <p class="text-lg text-slate-400 max-w-2xl mx-auto">
          了解来自各行各业的客户如何使用 CloudMeet 提升团队协作效率
        </p>
      </div>
    </section>

    <!-- Stats Banner -->
    <section class="py-12 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="clay-card p-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="text-center">
              <p class="text-3xl md:text-4xl font-bold gradient-text mb-2">10,000+</p>
              <p class="text-slate-400 text-sm">企业客户</p>
            </div>
            <div class="text-center">
              <p class="text-3xl md:text-4xl font-bold gradient-text mb-2">98%</p>
              <p class="text-slate-400 text-sm">满意度</p>
            </div>
            <div class="text-center">
              <p class="text-3xl md:text-4xl font-bold gradient-text mb-2">40%</p>
              <p class="text-slate-400 text-sm">效率提升</p>
            </div>
            <div class="text-center">
              <p class="text-3xl md:text-4xl font-bold gradient-text mb-2">150+</p>
              <p class="text-slate-400 text-sm">覆盖国家</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Studies -->
    <section class="py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            <span class="gradient-text">精选案例</span>
          </h2>
          <p class="text-slate-400 max-w-xl mx-auto">
            探索不同规模企业如何利用 CloudMeet 实现远程协作转型
          </p>
        </div>

        <div class="space-y-12">
          <!-- Case 1 -->
          <div class="clay-card p-6 md:p-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-xl flex-center bg-gradient-to-br from-cyan-400 to-cyan-600">
                    <span class="text-white font-bold text-lg">T</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-white">TechCorp 科技集团</h3>
                    <p class="text-sm text-slate-400">全球 500 强 · 科技公司</p>
                  </div>
                </div>
                <p class="text-slate-300 mb-4">
                  TechCorp 拥有超过 10,000 名员工，分布在全球 20 个国家。使用 CloudMeet 后，跨时区会议效率提升 60%，会议成本降低 45%。
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="clay-badge">视频会议</span>
                  <span class="clay-badge">实时翻译</span>
                  <span class="clay-badge">智能纪要</span>
                </div>
                <blockquote class="text-slate-400 italic border-l-2 border-cyan-400/30 pl-4">
                  "CloudMeet 彻底改变了我们的协作方式。现在全球团队可以像在同一间办公室一样高效沟通。"
                  <footer class="text-sm text-slate-500 mt-2">— 张明，CTO</footer>
                </blockquote>
              </div>
              <div class="clay-card p-6">
                <div class="grid grid-cols-2 gap-4">
                  <div class="text-center p-4 bg-cyan-400/5 rounded-xl">
                    <p class="text-2xl font-bold text-cyan-400 mb-1">60%</p>
                    <p class="text-xs text-slate-400">效率提升</p>
                  </div>
                  <div class="text-center p-4 bg-green-400/5 rounded-xl">
                    <p class="text-2xl font-bold text-green-400 mb-1">45%</p>
                    <p class="text-xs text-slate-400">成本降低</p>
                  </div>
                  <div class="text-center p-4 bg-purple-400/5 rounded-xl">
                    <p class="text-2xl font-bold text-purple-400 mb-1">20</p>
                    <p class="text-xs text-slate-400">覆盖国家</p>
                  </div>
                  <div class="text-center p-4 bg-yellow-400/5 rounded-xl">
                    <p class="text-2xl font-bold text-yellow-400 mb-1">10K+</p>
                    <p class="text-xs text-slate-400">用户数</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Case 2 -->
          <div class="clay-card p-6 md:p-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-xl flex-center bg-gradient-to-br from-purple-400 to-purple-600">
                    <span class="text-white font-bold text-lg">E</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-white">EduLearn 在线教育</h3>
                    <p class="text-sm text-slate-400">教育科技 · 在线学习平台</p>
                  </div>
                </div>
                <p class="text-slate-300 mb-4">
                  EduLearn 使用 CloudMeet 的直播和录制功能，为百万学员提供在线课程。AI 智能纪要帮助学生复习重点，课程完成率提升 35%。
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="clay-badge" style="border-color: rgba(139, 92, 246, 0.3); color: #a78bfa;">在线教育</span>
                  <span class="clay-badge" style="border-color: rgba(139, 92, 246, 0.3); color: #a78bfa;">课程录制</span>
                  <span class="clay-badge" style="border-color: rgba(139, 92, 246, 0.3); color: #a78bfa;">AI 纪要</span>
                </div>
                <blockquote class="text-slate-400 italic border-l-2 border-purple-400/30 pl-4">
                  "CloudMeet 的教育解决方案让我们的教学质量提升了一个层次，学员满意度创历史新高。"
                  <footer class="text-sm text-slate-500 mt-2">— 李华，创始人</footer>
                </blockquote>
              </div>
              <div class="clay-card p-6">
                <div class="grid grid-cols-2 gap-4">
                  <div class="text-center p-4 bg-purple-400/5 rounded-xl">
                    <p class="text-2xl font-bold text-purple-400 mb-1">35%</p>
                    <p class="text-xs text-slate-400">完成率提升</p>
                  </div>
                  <div class="text-center p-4 bg-cyan-400/5 rounded-xl">
                    <p class="text-2xl font-bold text-cyan-400 mb-1">1M+</p>
                    <p class="text-xs text-slate-400">学员数</p>
                  </div>
                  <div class="text-center p-4 bg-green-400/5 rounded-xl">
                    <p class="text-2xl font-bold text-green-400 mb-1">95%</p>
                    <p class="text-xs text-slate-400">满意度</p>
                  </div>
                  <div class="text-center p-4 bg-yellow-400/5 rounded-xl">
                    <p class="text-2xl font-bold text-yellow-400 mb-1">500+</p>
                    <p class="text-xs text-slate-400">讲师数</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Case 3 -->
          <div class="clay-card p-6 md:p-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-xl flex-center bg-gradient-to-br from-green-400 to-green-600">
                    <span class="text-white font-bold text-lg">F</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-white">FinancePlus 金融服务</h3>
                    <p class="text-sm text-slate-400">金融科技 · 金融服务</p>
                  </div>
                </div>
                <p class="text-slate-300 mb-4">
                  FinancePlus 使用 CloudMeet 企业版的安全会议功能，进行高管会议和客户洽谈。端到端加密和 SSO 集成确保数据安全合规。
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="clay-badge" style="border-color: rgba(74, 222, 128, 0.3); color: #4ade80;">企业安全</span>
                  <span class="clay-badge" style="border-color: rgba(74, 222, 128, 0.3); color: #4ade80;">SSO 集成</span>
                  <span class="clay-badge" style="border-color: rgba(74, 222, 128, 0.3); color: #4ade80;">端到端加密</span>
                </div>
                <blockquote class="text-slate-400 italic border-l-2 border-green-400/30 pl-4">
                  "在金融行业，安全是第一要务。CloudMeet 的企业级安全功能完全符合我们的合规要求。"
                  <footer class="text-sm text-slate-500 mt-2">— 王强，信息安全总监</footer>
                </blockquote>
              </div>
              <div class="clay-card p-6">
                <div class="grid grid-cols-2 gap-4">
                  <div class="text-center p-4 bg-green-400/5 rounded-xl">
                    <p class="text-2xl font-bold text-green-400 mb-1">100%</p>
                    <p class="text-xs text-slate-400">合规率</p>
                  </div>
                  <div class="text-center p-4 bg-cyan-400/5 rounded-xl">
                    <p class="text-2xl font-bold text-cyan-400 mb-1">0</p>
                    <p class="text-xs text-slate-400">安全事件</p>
                  </div>
                  <div class="text-center p-4 bg-purple-400/5 rounded-xl">
                    <p class="text-2xl font-bold text-purple-400 mb-1">5000+</p>
                    <p class="text-xs text-slate-400">企业用户</p>
                  </div>
                  <div class="text-center p-4 bg-yellow-400/5 rounded-xl">
                    <p class="text-2xl font-bold text-yellow-400 mb-1">99.9%</p>
                    <p class="text-xs text-slate-400">可用性</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Case 4 -->
          <div class="clay-card p-6 md:p-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-xl flex-center bg-gradient-to-br from-yellow-400 to-yellow-600">
                    <span class="text-white font-bold text-lg">D</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-white">DesignHub 设计工作室</h3>
                    <p class="text-sm text-slate-400">创意设计 · 远程协作</p>
                  </div>
                </div>
                <p class="text-slate-300 mb-4">
                  DesignHub 使用 CloudMeet 的白板和屏幕共享功能，进行远程设计评审和创意讨论。虚拟背景让设计师可以在任何环境下保持专业形象。
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="clay-badge" style="border-color: rgba(250, 204, 21, 0.3); color: #facc15;">在线白板</span>
                  <span class="clay-badge" style="border-color: rgba(250, 204, 21, 0.3); color: #facc15;">屏幕共享</span>
                  <span class="clay-badge" style="border-color: rgba(250, 204, 21, 0.3); color: #facc15;">虚拟背景</span>
                </div>
                <blockquote class="text-slate-400 italic border-l-2 border-yellow-400/30 pl-4">
                  "CloudMeet 的协作工具让我们的设计评审效率翻倍，客户满意度也显著提升。"
                  <footer class="text-sm text-slate-500 mt-2">— 陈美，创意总监</footer>
                </blockquote>
              </div>
              <div class="clay-card p-6">
                <div class="grid grid-cols-2 gap-4">
                  <div class="text-center p-4 bg-yellow-400/5 rounded-xl">
                    <p class="text-2xl font-bold text-yellow-400 mb-1">2x</p>
                    <p class="text-xs text-slate-400">效率提升</p>
                  </div>
                  <div class="text-center p-4 bg-cyan-400/5 rounded-xl">
                    <p class="text-2xl font-bold text-cyan-400 mb-1">80%</p>
                    <p class="text-xs text-slate-400">客户满意度</p>
                  </div>
                  <div class="text-center p-4 bg-green-400/5 rounded-xl">
                    <p class="text-2xl font-bold text-green-400 mb-1">200+</p>
                    <p class="text-xs text-slate-400">设计师</p>
                  </div>
                  <div class="text-center p-4 bg-purple-400/5 rounded-xl">
                    <p class="text-2xl font-bold text-purple-400 mb-1">30+</p>
                    <p class="text-xs text-slate-400">国家</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            <span class="gradient-text">客户评价</span>
          </h2>
          <p class="text-slate-400 max-w-xl mx-auto">
            听听客户怎么说
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="clay-card p-6">
            <div class="flex items-center gap-1 mb-4">
              <IconMdStar width="18" height="18" class="text-yellow-400" />
              <IconMdStar width="18" height="18" class="text-yellow-400" />
              <IconMdStar width="18" height="18" class="text-yellow-400" />
              <IconMdStar width="18" height="18" class="text-yellow-400" />
              <IconMdStar width="18" height="18" class="text-yellow-400" />
            </div>
            <p class="text-slate-300 text-sm mb-4">
              "CloudMeet 的实时翻译功能帮助我们打破了语言障碍，现在我们可以和全球团队无缝协作。"
            </p>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex-center">
                <span class="text-white text-sm font-bold">A</span>
              </div>
              <div>
                <p class="text-sm font-semibold text-white">Alex Chen</p>
                <p class="text-xs text-slate-400">Google 产品经理</p>
              </div>
            </div>
          </div>

          <div class="clay-card p-6">
            <div class="flex items-center gap-1 mb-4">
              <IconMdStar width="18" height="18" class="text-yellow-400" />
              <IconMdStar width="18" height="18" class="text-yellow-400" />
              <IconMdStar width="18" height="18" class="text-yellow-400" />
              <IconMdStar width="18" height="18" class="text-yellow-400" />
              <IconMdStar width="18" height="18" class="text-yellow-400" />
            </div>
            <p class="text-slate-300 text-sm mb-4">
              "智能纪要功能简直是会议杀手锏，再也不用花几个小时整理会议纪要了。"
            </p>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex-center">
                <span class="text-white text-sm font-bold">S</span>
              </div>
              <div>
                <p class="text-sm font-semibold text-white">Sarah Wang</p>
                <p class="text-xs text-slate-400">Microsoft 项目经理</p>
              </div>
            </div>
          </div>

          <div class="clay-card p-6">
            <div class="flex items-center gap-1 mb-4">
              <IconMdStar width="18" height="18" class="text-yellow-400" />
              <IconMdStar width="18" height="18" class="text-yellow-400" />
              <IconMdStar width="18" height="18" class="text-yellow-400" />
              <IconMdStar width="18" height="18" class="text-yellow-400" />
              <IconMdStar width="18" height="18" class="text-yellow-400" />
            </div>
            <p class="text-slate-300 text-sm mb-4">
              "从免费版升级到企业版，CloudMeet 始终保持着优秀的产品质量和客户服务。"
            </p>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex-center">
                <span class="text-white text-sm font-bold">M</span>
              </div>
              <div>
                <p class="text-sm font-semibold text-white">Mike Liu</p>
                <p class="text-xs text-slate-400">Tencent 技术总监</p>
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
          <span class="shimmer-text">成为下一个成功案例</span>
        </h2>
        <p class="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
          加入 10,000+ 企业的行列，开启高效远程协作之旅
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
import IconMdStar from '~icons/mdi/star'
import IconMdRocket from '~icons/mdi/rocket'
</script>

<style scoped>
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>