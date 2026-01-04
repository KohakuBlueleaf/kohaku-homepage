<script setup>
import { useSlots } from 'vue'

const slots = useSlots()

defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  viewAllLink: {
    type: String,
    default: ''
  },
  viewAllText: {
    type: String,
    default: 'View all'
  }
})
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 py-8 md:py-12">
    <!-- Header -->
    <div v-if="title || subtitle || slots.title" class="flex items-center justify-between mb-6">
      <div>
        <h2 v-if="title || slots.title" class="text-2xl md:text-3xl font-bold">
          <slot name="title">{{ title }}</slot>
        </h2>
        <p v-if="subtitle" class="text-gray-400 mt-1">{{ subtitle }}</p>
      </div>
      <a
        v-if="viewAllLink"
        :href="viewAllLink"
        class="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 flex items-center gap-1 text-sm md:text-base"
      >
        {{ viewAllText }}
        <span class="i-carbon-arrow-right"></span>
      </a>
    </div>

    <!-- Content -->
    <slot></slot>
  </section>
</template>
