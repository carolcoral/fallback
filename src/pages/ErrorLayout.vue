<template>
  <div class="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
    <component :is="currentBg" :main-color="mainColor" class="absolute inset-0 w-full h-full z-0" />
    <div class="flex flex-col items-center p-8 rounded-2xl shadow-xl bg-white/80 border border-blue-100 z-10">
      <div class="text-7xl font-extrabold mb-4 animate-bounce bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(99,102,241,0.4)]">
        {{ code }}
      </div>
      <div class="text-2xl font-bold mb-2 animate-gradient-x bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(236,72,153,0.3)]">
        XINDU.SITE 错误页
      </div>
      <div class="text-gray-500 mb-6 text-center max-w-md">{{ desc }}</div>
      <button @click="goBack" class="mt-2 px-6 py-2 rounded-lg bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition">返回上一页</button>
    </div>
    <div class="mt-10 text-gray-400 text-sm z-10">CopyRight From XINDU.SITE</div>
  </div>
</template>

<script setup>
import { ref, onMounted, shallowRef, computed } from 'vue'
import BgLines from './bg/BgLines.vue'
import BgMeteor from './bg/BgMeteor.vue'
import BgGlow from './bg/BgGlow.vue'
const props = defineProps({
  code: String,
  title: String,
  desc: String
})
// 针对不同code选择不同特效和主色
const bgMap = {
  '401': {comp: BgLines, color: '#60a5fa'},
  '402': {comp: BgGlow, color: '#a5b4fc'},
  '403': {comp: BgMeteor, color: '#f87171'},
  '404': {comp: BgGlow, color: '#a78bfa'},
  '405': {comp: BgLines, color: '#facc15'},
  '500': {comp: BgMeteor, color: '#f87171'},
  '501': {comp: BgGlow, color: '#38bdf8'},
  '502': {comp: BgLines, color: '#fb7185'},
  '503': {comp: BgGlow, color: '#60a5fa'},
  '504': {comp: BgMeteor, color: '#a78bfa'},
  '505': {comp: BgGlow, color: '#c084fc'},
  '522': {comp: BgLines, color: '#38bdf8'}
}
const defaultBg = {comp: BgGlow, color: '#60a5fa'}
const currentBg = shallowRef(defaultBg.comp)
const mainColor = ref(defaultBg.color)
onMounted(() => {
  const conf = bgMap[props.code] || defaultBg
  currentBg.value = conf.comp
  mainColor.value = conf.color
})
function goBack() {
  window.history.length > 1 ? window.history.back() : window.location.href = '/';
}
</script>

<style scoped>
@keyframes gradient-x {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 3s ease-in-out infinite;
}
</style> 