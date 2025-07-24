<template>
  <div class="absolute inset-0 w-full h-full overflow-hidden">
    <div class="absolute inset-0 z-0 bg-gradient-to-br from-blue-200/60 via-purple-200/40 to-pink-200/60 animate-bg-move"></div>
    <div class="absolute inset-0 z-10 pointer-events-none">
      <div v-for="i in 10" :key="i" :class="['absolute h-[120%] w-0.5', 'bg-gradient-to-b from-blue-400/60 via-white/0 to-pink-400/60', 'left-['+i*10+'%] animate-line-move']" :style="{left: (i*10)+'%'}"></div>
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
  animation: bg-move 8s linear infinite alternate;
}
@keyframes line-move {
  0% { transform: translateY(-10%); opacity: 0.5; }
  50% { opacity: 1; }
  100% { transform: translateY(10%); opacity: 0.5; }
}
.animate-line-move {
  animation: line-move 3s ease-in-out infinite alternate;
}
</style> 