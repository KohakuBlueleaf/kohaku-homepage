<script setup>
import Section from './Section.vue'
import PublicationCard from './PublicationCard.vue'

defineProps({
  publications: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <Section viewAllLink="/pubs/" viewAllText="View all">
    <template #title>
      Recent <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Publications</span>
    </template>

    <div class="flex flex-col gap-4">
      <PublicationCard
        v-for="publication in publications"
        :key="publication.name"
        :publication="publication"
      />
    </div>
  </Section>
</template>
