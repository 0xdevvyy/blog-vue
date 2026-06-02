<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { fetchBlogBySlug } from '@/services/BlogApi'

const route = useRoute()
const blog = ref(null)

onMounted(async () => {
  try {
    const data = await fetchBlogBySlug(route.params.slug)
    blog.value = data.data
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <div v-if="blog" class="max-w-4xl mx-auto py-10">
    <h1 class="text-4xl font-bold">
      {{ blog.title }}
    </h1>

    <div class="mt-6">
      {{ blog.content }}
    </div>
  </div>
</template>
