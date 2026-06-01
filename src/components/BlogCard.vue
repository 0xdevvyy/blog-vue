<script setup>
defineProps({
  blog: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article
    class="group bg-white border border-gray-200 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
  >
    <!-- Image -->
    <div class="overflow-hidden">
      <img
        :src="blog.blogImage"
        :alt="blog.title"
        class="w-full h-56 object-cover transition-all duration-500 group-hover:scale-105"
      />
    </div>

    <div class="p-5">
      <!-- Date -->
      <div class="text-xs text-gray-500 mb-3">
        {{ new Date(blog.createdAt).toLocaleDateString() }}
      </div>

      <!-- Title -->
      <h2
        class="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-sky-600"
      >
        {{ blog.title }}
      </h2>

      <!-- Description -->
      <p class="text-gray-600 line-clamp-3 mb-4">
        {{ blog.description }}
      </p>

      <!-- Read More -->
      <!-- <RouterLink
        :to="`/blog/${blog.slug}`"
        class="inline-flex items-center text-sky-600 font-medium hover:text-sky-700"
      >
        Read More
      </RouterLink> -->
    </div>
  </article>
</template>
