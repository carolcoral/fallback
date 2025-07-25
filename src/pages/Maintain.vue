<template>
  <div class="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
    <BgGlow class="absolute inset-0 w-full h-full z-0"/>
    <div
        class="flex flex-col items-center p-8 rounded-2xl shadow-xl bg-white/80 border border-blue-100 z-10 min-w-[55%] max-w-[90%] clickS"
    >
      <div
          class="text-5xl md:text-7xl font-extrabold mb-2 animate-bounce bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(99,102,241,0.4)]">
        XINDU.
      </div>
      <div
          class="text-2xl md:text-4xl font-bold mb-2 animate-gradient-x bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(236,72,153,0.3)]">
        Great Things Are Coming Soon
      </div>
      <div class="h-2 md:h-4"></div>
      <div class="flex flex-wrap justify-center gap-3 mb-6 w-full">
        <button type="button" class="btn" v-for="(item, idx) in links"
                :key="idx">
          <a :href="item.url" target="_blank" rel="noopener">
            <strong>{{item.name}}</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </a>
        </button>
      </div>
      <div class="text-gray-500 mb-6 text-center max-w-md">
        我们的网站正在维护升级，敬请期待！<br/>
        Our website is currently undergoing scheduled maintenance.<br/>
        We should be back shortly. Thank you for your patience.
      </div>
      <div class="flex gap-4 mb-6" style="-webkit-box-reflect: below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4));">
        <div class="flex flex-col items-center">
          <span class="text-3xl md:text-5xl font-extrabold text-blue-500">{{ countdown.days }}</span>
          <span class="text-xs md:text-base text-gray-500 mt-1">天</span>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-3xl md:text-5xl font-extrabold text-blue-500">{{ countdown.hours }}</span>
          <span class="text-xs md:text-base text-gray-500 mt-1">时</span>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-3xl md:text-5xl font-extrabold text-blue-500">{{ countdown.minutes }}</span>
          <span class="text-xs md:text-base text-gray-500 mt-1">分</span>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-3xl md:text-5xl font-extrabold text-blue-500">{{ countdown.seconds }}</span>
          <span class="text-xs md:text-base text-gray-500 mt-1">秒</span>
        </div>
      </div>
      <!--<button @click="goBack"-->
      <!--        class="mt-2 px-6 py-2 rounded-lg bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition">-->
      <!--  返回上一页-->
      <!--</button>-->
    </div>
    <div class="mt-10 text-gray-400 text-sm z-10">Copyright © 2025. XINDU.SITE All rights reserved.</div>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted, ref} from 'vue'
import BgGlow from './bg/BgGlow.vue'
import yaml from 'js-yaml'

const links = ref([])
const endTime = ref(new Date())

// 读取config.yaml
async function loadConfig() {
  const res = await fetch('/config.yaml')
  const text = await res.text()
  const config = yaml.load(text)
  links.value = config.maintain.links
  endTime.value = new Date(config.maintain.endTime)
}

const countdown = ref({days: 0, hours: 0, minutes: 0, seconds: 0})
let timer = null

function updateCountdown() {
  const now = new Date()
  let diff = Math.max(0, endTime.value - now)
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  diff -= days * 1000 * 60 * 60 * 24
  const hours = Math.floor(diff / (1000 * 60 * 60))
  diff -= hours * 1000 * 60 * 60
  const minutes = Math.floor(diff / (1000 * 60))
  diff -= minutes * 1000 * 60
  const seconds = Math.floor(diff / 1000)
  countdown.value = {days, hours, minutes, seconds}
}

onMounted(async () => {
  await loadConfig()
  updateCountdown()
  timer = setInterval(updateCountdown, 1000)
})
onUnmounted(() => {
  if (timer) clearInterval(timer)
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

.icon-btn-glow {
  position: relative;
  width: 2.1rem;
  height: 2.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
  color: #fff;
  box-shadow: 0 2px 12px 0 rgba(99, 102, 241, 0.18);
  overflow: hidden;
  transition: transform 0.18s cubic-bezier(.4, 2, .6, 1), box-shadow 0.18s;
}

.icon-btn-glow:hover {
  transform: scale(1.18) rotate(-6deg);
  box-shadow: 0 4px 24px 0 rgba(99, 102, 241, 0.28);
}

.icon-glow {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  z-index: 1;
  background: conic-gradient(from 0deg, #60a5fa, #a78bfa, #f472b6, #60a5fa 100%);
  opacity: 0.7;
  filter: blur(6px);
  transition: opacity 0.2s;
  animation: flow-light 2.2s linear infinite;
}

.icon-btn-glow:hover .icon-glow {
  opacity: 1;
}

@keyframes flow-light {
  0% {
    transform: rotate(0deg) scale(1);
  }
  100% {
    transform: rotate(360deg) scale(1.08);
  }
}

/* 按钮跳转样式 */
/* From Uiverse.io by StealthWorm */
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  overflow: hidden;
  height: 2.5rem;
  background-size: 300% 300%;
  cursor: pointer;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
  transition: 0.5s;
  animation: gradient_301 5s ease infinite;
  border: double 4px transparent;
  background-image: linear-gradient(#212121, #212121),
  linear-gradient(
      137.48deg,
      #ffdb3b 10%,
      #fe53bb 45%,
      #8f51ea 67%,
      #0044ff 87%
  );
  background-origin: border-box;
  background-clip: content-box, border-box;
}

#container-stars {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: 0.5s;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
}

strong {
  z-index: 2;
  font-family: "Avalors Personal Use", serif;
  font-size: 12px;
  letter-spacing: 5px;
  color: #ffffff;
  text-shadow: 0 0 4px white;
}

#glow {
  position: absolute;
  display: flex;
  width: 12rem;
}

.circle {
  width: 100%;
  height: 30px;
  filter: blur(2rem);
  animation: pulse_3011 4s infinite;
  z-index: -1;
}

.circle:nth-of-type(1) {
  background: rgba(254, 83, 186, 0.636);
}

.circle:nth-of-type(2) {
  background: rgba(142, 81, 234, 0.704);
}

.btn:hover #container-stars {
  z-index: 1;
  background-color: #212121;
}

.btn:hover {
  transform: scale(1.1);
}

.btn:active {
  border: double 4px #fe53bb;
  background-origin: border-box;
  background-clip: content-box, border-box;
  animation: none;
}

.btn:active .circle {
  background: #fe53bb;
}

#stars {
  position: relative;
  background: transparent;
  width: 200rem;
  height: 200rem;
}

#stars::after {
  content: "";
  position: absolute;
  top: -10rem;
  left: -100rem;
  width: 100%;
  height: 100%;
  animation: animStarRotate 90s linear infinite;
}

#stars::after {
  background-image: radial-gradient(#ffffff 1px, transparent 1%);
  background-size: 50px 50px;
}

#stars::before {
  content: "";
  position: absolute;
  top: 0;
  left: -50%;
  width: 170%;
  height: 500%;
  animation: animStar 60s linear infinite;
}

#stars::before {
  background-image: radial-gradient(#ffffff 1px, transparent 1%);
  background-size: 50px 50px;
  opacity: 0.5;
}

@keyframes animStar {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-135rem);
  }
}

@keyframes animStarRotate {
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0);
  }
}

@keyframes gradient_301 {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

@keyframes pulse_3011 {
  0% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}
</style>
<style>
/* From Uiverse.io by mrhyddenn */
.clickS {
  position: relative;
  padding: 10px 20px;
  border-radius: 7px;
  border: 1px solid rgb(211, 98, 195);
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  background: transparent;
  color: #fff;
  overflow: hidden;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  opacity: 100%;
}

.clickS:hover {
  /* background: rgb(218, 213, 236); */
  box-shadow: 0 0 30px 5px rgba(248, 249, 250, 0.81);
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

.clickS:hover::before {
  -webkit-animation: sh02 0.5s 0s linear;
  -moz-animation: sh02 0.5s 0s linear;
  animation: sh02 0.5s 0s linear;
}

.clickS::before {
  content: '';
  display: block;
  width: 0px;
  height: 86%;
  position: absolute;
  top: 7%;
  left: 0%;
  opacity: 0;
  background: #fff;
  box-shadow: 0 0 50px 30px #fff;
  -webkit-transform: skewX(-20deg);
  -moz-transform: skewX(-20deg);
  -ms-transform: skewX(-20deg);
  -o-transform: skewX(-20deg);
  transform: skewX(-20deg);
}

@keyframes sh02 {
  from {
    /* opacity: 0; */
    left: 0%;
  }

  50% {
    opacity: 1;
  }

  to {
    opacity: 0;
    left: 100%;
  }
}

.clickS:active {
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: box-shadow 0.2s ease-in;
  -moz-transition: box-shadow 0.2s ease-in;
  transition: box-shadow 0.2s ease-in;
}
</style>

