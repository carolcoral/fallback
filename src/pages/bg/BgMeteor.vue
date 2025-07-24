<template>
  <div class="absolute inset-0 w-full h-full overflow-hidden">
    <div class="absolute inset-0 z-0 bg-gradient-to-tr from-blue-300/60 via-purple-200/40 to-pink-200/60 animate-bg-move"></div>
    <div class="absolute inset-0 z-10 pointer-events-none">
      <div v-for="i in 6" :key="i" :class="['absolute w-32 h-1 rounded-full bg-gradient-to-r from-white/80 via-blue-400/80 to-transparent blur-sm animate-meteor']" :style="{top: (i*18+10)+'%', left: (i*12+5)+'%', animationDelay: (i*0.7)+'s'}"></div>
    </div>
    <div class="absolute inset-0 z-20 backdrop-blur-xl bg-white/10"></div>
  </div>
</template>

<style scoped>
@keyframes bg-move {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
.animate-bg-move {
  background-size: 200% 200%;
  animation: bg-move 10s linear infinite alternate;
}
@keyframes meteor {
  0% { transform: translateX(-100vw) scaleX(0.7); opacity: 0; }
  10% { opacity: 1; }
  80% { opacity: 1; }
  100% { transform: translateX(100vw) scaleX(1.2); opacity: 0; }
}
.animate-meteor {
  animation: meteor 3.5s linear infinite;
}
</style> 