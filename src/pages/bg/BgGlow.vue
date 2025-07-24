<template>
  <div class="absolute inset-0 w-full h-full overflow-hidden">
    <div class="absolute inset-0 z-0 bg-gradient-to-tl from-blue-200/60 via-purple-200/40 to-pink-200/60 animate-bg-move"></div>
    <div class="absolute inset-0 z-10 pointer-events-none">
      <div v-for="i in 12" :key="i" :class="['bubble']" :style="bubbleStyle(i)"></div>
    </div>
    <div class="absolute inset-0 z-20 backdrop-blur-2xl bg-white/10"></div>
  </div>
</template>

<script setup>
function bubbleStyle(i) {
  const colors = [
    'rgba(96,165,250,0.5)',
    'rgba(236,72,153,0.4)',
    'rgba(168,139,250,0.4)',
    'rgba(251,113,133,0.4)',
    'rgba(59,130,246,0.4)',
    'rgba(16,185,129,0.4)'
  ]
  return {
    width: (60 + Math.random()*120) + 'px',
    height: (60 + Math.random()*120) + 'px',
    top: (Math.random()*90) + '%',
    left: (Math.random()*90) + '%',
    background: colors[i%colors.length],
    animationDelay: (i*0.7)+'s',
    filter: 'blur(0.5px)'
  }
}
</script>

<style scoped>
@keyframes bg-move {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
.animate-bg-move {
  background-size: 200% 200%;
  animation: bg-move 12s linear infinite alternate;
}
.bubble {
  position: absolute;
  border-radius: 50%;
  opacity: 0.7;
  animation: bubble-move 8s ease-in-out infinite alternate;
  box-shadow: 0 0 40px 10px rgba(255,255,255,0.15);
  transition: background 0.5s;
}
@keyframes bubble-move {
  0% { transform: scale(1) translateY(0); }
  50% { transform: scale(1.2) translateY(-30px); }
  100% { transform: scale(1) translateY(0); }
}
</style> 