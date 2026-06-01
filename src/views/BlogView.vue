<script setup>
import { ref, onMounted } from 'vue'
import { fetchBlog } from '@/services/BlogApi'
import BlogCard from '@/components/BlogCard.vue'

const blogs = ref([])

onMounted(async () => {
  try {
    const data = await fetchBlog()
    blogs.value = data.data
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 py-10">
    <!-- Header -->
    <div class="flex justify-between items-center mb-10">
      <h1 class="text-3xl font-bold text-sky-500">Blog</h1>

      <input type="text" placeholder="Search..." class="px-4 py-2 border rounded-full w-72" />
    </div>

    <div class="grid lg:grid-cols-[250px_1fr] gap-10">
      <!-- Sidebar for now a placeholder need to make this a components-->
      <aside class="hidden lg:block sticky top-8 self-start">
        <h3 class="font-bold mb-4">Topics</h3>

        <ul class="space-y-3 text-gray-600">
          <li>All topics</li>
          <li>Vue</li>
          <li>Laravel</li>
          <li>Backend</li>
          <li>Frontend</li>
        </ul>
      </aside>

      <!-- Blog Grid -->
      <section class="grid md:grid-cols-2 gap-6">
        <BlogCard v-for="blog in blogs" :key="blog.id" :blog="blog" />
      </section>
    </div>
  </div>
</template>
