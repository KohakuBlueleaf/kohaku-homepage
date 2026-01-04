<script setup>
import Section from './Section.vue'
import BlogPostCard from './BlogPostCard.vue'

defineProps({
  posts: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <Section viewAllLink="/posts/" viewAllText="View all">
    <template #title>
      Recent <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Posts</span>
    </template>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <BlogPostCard
        v-for="post in posts"
        :key="post.slug || post.title"
        :post="post"
      />
    </div>
  </Section>
</template>
