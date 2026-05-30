<script setup>
import FloatingCard from '@/components/FloatingCard.vue'
import HeroSection from '@/components/HeroSection.vue'
</script>

<template>
  <div class="paper-texture text-black min-h-screen">
    <section class="max-w-6xl mx-auto px-6 py-16 border-b border-black">
      <div class="grid lg:grid-cols-2 gap-14 items-center">
        <HeroSection />
        <FloatingCard />
      </div>
    </section>
  </div>
</template>
