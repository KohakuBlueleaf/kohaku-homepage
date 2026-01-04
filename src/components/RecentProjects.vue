<script setup>
import Section from './Section.vue'
import ProjectCard from './ProjectCard.vue'

defineProps({
  projects: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <Section viewAllLink="/projects/" viewAllText="View all">
    <template #title>
      Recent <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
    </template>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ProjectCard
        v-for="project in projects"
        :key="project.name"
        :project="project"
      />
    </div>
  </Section>
</template>
