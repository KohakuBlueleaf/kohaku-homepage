<script setup>
import TagBadge from "./TagBadge.vue";

/**
 * @typedef {Object} Logo
 * @property {string} src - Logo image source
 * @property {string} [alt] - Logo alt text
 *
 * @typedef {Object} Career
 * @property {string} title - Job title
 * @property {string} company - Company name
 * @property {Logo|string} [logo] - Company logo
 * @property {string} startDate - Start date
 * @property {string} endDate - End date
 * @property {string} [salary] - Compensation
 * @property {string} [location] - Work location
 * @property {string} [description] - Job description
 * @property {string[]} [skills] - Skills/keywords
 */

defineProps({
  career: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="bg-slate-800 rounded-lg p-6">
    <div class="flex flex-col gap-x-8 md:flex-row">
      <!-- Company Logo -->
      <div class="shrink-0 mb-4 md:mb-0 md:w-36">
        <img
          v-if="career.logo?.src || (typeof career.logo === 'string' && career.logo)"
          :src="career.logo?.src || career.logo"
          :alt="career.logo?.alt || `${career.company} Logo`"
          class="h-36 w-36 rounded-md object-contain"
          loading="lazy"
        />
        <div
          v-else
          class="h-36 w-36 rounded-md bg-slate-700 flex items-center justify-center"
        >
          <span class="text-slate-500 text-sm">No Logo</span>
        </div>
      </div>

      <!-- Details -->
      <div class="flex-grow">
        <!-- Title @ Company -->
        <div class="flex flex-col items-start gap-y-1 md:flex-row md:items-center md:gap-y-2">
          <h3 class="text-xl font-semibold">{{ career.title }}</h3>
          <span class="text-lg text-gray-400 md:ml-2">@ {{ career.company }}</span>
        </div>

        <!-- Date Range | Location | Salary -->
        <div class="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-400">
          <span>{{ career.startDate }} - {{ career.endDate }}</span>
          <span v-if="career.location">| {{ career.location }}</span>
          <span v-if="career.salary">| {{ career.salary }}</span>
        </div>

        <!-- Description -->
        <p v-if="career.description" class="mt-3 text-gray-300">
          {{ career.description }}
        </p>

        <!-- Skills -->
        <div v-if="career.skills?.length" class="mt-3 flex flex-wrap gap-2">
          <TagBadge v-for="skill in career.skills" :key="skill" :tag="skill" />
        </div>
      </div>
    </div>
  </div>
</template>
