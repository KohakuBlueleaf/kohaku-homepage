<script setup>
import TagBadge from "./TagBadge.vue";

/**
 * @typedef {Object} Project
 * @property {string} name - Project name
 * @property {string} description - Project description
 * @property {string} link - Project link
 * @property {string[]} tags - Project tags
 */

defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <a
    :href="project.link"
    class="group block bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-200 p-4"
  >
    <!-- Header: Name + Arrow -->
    <div class="flex items-start justify-between gap-2">
      <h3 class="text-lg font-semibold text-gray-100 group-hover:text-cyan-400 transition-colors">
        {{ project.name }}
      </h3>
      <span class="i-carbon-arrow-up-right text-gray-500 group-hover:text-cyan-400 transition-colors shrink-0 mt-1"></span>
    </div>

    <!-- Tags -->
    <div class="flex flex-wrap gap-1.5 mt-2">
      <TagBadge v-for="tag in project.tags" :key="tag" :tag="tag" />
    </div>

    <!-- Description -->
    <p class="mt-3 text-sm text-gray-400 leading-relaxed">
      {{ project.description }}
    </p>
  </a>
</template>
