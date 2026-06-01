<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <!-- <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <div class="paper-texture text-black min-h-screen">
    <RouterView />
  </div>
</template>

<style scoped></style>
