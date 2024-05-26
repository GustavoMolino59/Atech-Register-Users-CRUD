<script setup>
import { RouterView } from 'vue-router'
import HeaderBase from './components/HeaderBase.vue';
import FooterBase from './components/FooterBase.vue'
</script>

<template >
  
  <HeaderBase />
  
  <RouterView />

  <FooterBase />
</template>

<style scoped></style>
