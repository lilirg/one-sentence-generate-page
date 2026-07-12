<template>
  <nav class="navbar fixed-top w-full">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center gap-2">
          <div class="w-10 h-10 rounded-xl flex-center bg-gradient-to-br from-cyan-400 to-cyan-600 glow-pulse">
            <IconMdVideoAccount width="24" height="24" color="#fff" />
          </div>
          <span class="text-xl font-bold gradient-text">CloudMeet</span>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-2">
          <router-link to="/" class="nav-link" active-class="active">
            <IconMdHome width="18" height="18" class="mr-1" />
            首页
          </router-link>
          <router-link to="/services" class="nav-link" active-class="active">
            <IconMdDevices width="18" height="18" class="mr-1" />
            服务
          </router-link>
          <router-link to="/cases" class="nav-link" active-class="active">
            <IconMdStar width="18" height="18" class="mr-1" />
            案例
          </router-link>
          <router-link to="/docs" class="nav-link" active-class="active">
            <IconMdBookOpen width="18" height="18" class="mr-1" />
            文档
          </router-link>
          <router-link to="/pricing" class="nav-link" active-class="active">
            <IconMdCash width="18" height="18" class="mr-1" />
            价格
          </router-link>
          <router-link to="/about" class="nav-link" active-class="active">
            <IconMdInformation width="18" height="18" class="mr-1" />
            关于
          </router-link>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center gap-3">
          <button class="px-4 py-2 rounded-xl text-cyan-300 border border-cyan-400/30 hover:bg-cyan-400/10 transition-all duration-200 text-sm font-medium">
            登录
          </button>
          <button class="clay-btn text-sm px-5 py-2">
            免费开始
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden p-2 text-cyan-300" @click="menuOpen = !menuOpen">
          <IconMdMenu width="24" height="24" v-if="!menuOpen" />
          <IconMdClose width="24" height="24" v-else />
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="menuOpen" class="md:hidden py-4 border-t border-cyan-400/10">
        <div class="flex flex-col gap-2">
          <router-link to="/" class="nav-link" @click="menuOpen = false">
            <IconMdHome width="16" height="16" class="mr-2" />首页
          </router-link>
          <router-link to="/services" class="nav-link" @click="menuOpen = false">
            <IconMdDevices width="16" height="16" class="mr-2" />服务
          </router-link>
          <router-link to="/cases" class="nav-link" @click="menuOpen = false">
            <IconMdStar width="16" height="16" class="mr-2" />案例
          </router-link>
          <router-link to="/docs" class="nav-link" @click="menuOpen = false">
            <IconMdBookOpen width="16" height="16" class="mr-2" />文档
          </router-link>
          <router-link to="/pricing" class="nav-link" @click="menuOpen = false">
            <IconMdCash width="16" height="16" class="mr-2" />价格
          </router-link>
          <router-link to="/about" class="nav-link" @click="menuOpen = false">
            <IconMdInformation width="16" height="16" class="mr-2" />关于
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconMdHome from '~icons/mdi/home'
import IconMdDevices from '~icons/mdi/devices'
import IconMdMenu from '~icons/mdi/menu'
import IconMdClose from '~icons/mdi/close'
import IconMdVideoAccount from '~icons/mdi/video-account'
import IconMdStar from '~icons/mdi/star'
import IconMdBookOpen from '~icons/mdi/book-open'
import IconMdCash from '~icons/mdi/cash'
import IconMdInformation from '~icons/mdi/information'

const menuOpen = ref(false)
</script>

<style scoped>
.navbar {
  z-index: 100;
}
</style>