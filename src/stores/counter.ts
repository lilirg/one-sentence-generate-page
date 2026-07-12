import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore(
  'counter',
  () => {
    // 状态
    const count = ref(0)

    // 计算属性
    const doubleCount = computed(() => count.value * 2)

    // 操作
    function increment() {
      count.value++
    }

    function decrement() {
      count.value--
    }

    function reset() {
      count.value = 0
    }

    return {
      count,
      doubleCount,
      increment,
      decrement,
      reset,
    }
  },
  {
    // 开启持久化
    persist: true,
  },
)