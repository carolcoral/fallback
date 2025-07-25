<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  // 禁止F12、Ctrl+Shift+I、Ctrl+U、Ctrl+S、右键
  // window.addEventListener('keydown', (e) => {
  //   if (
  //     e.key === 'F12' ||
  //     (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'i') ||
  //     (e.ctrlKey && e.key.toLowerCase() === 'u') ||
  //     (e.ctrlKey && e.key.toLowerCase() === 's')
  //   ) {
  //     e.preventDefault()
  //     e.stopPropagation()
  //     return false
  //   }
  // })
  // window.addEventListener('contextmenu', (e) => {
  //   e.preventDefault()
  //   return false
  // })
})
</script> 