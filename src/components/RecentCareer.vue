<script setup>
import Section from './Section.vue'
import CareerCard from './CareerCard.vue'

defineProps({
  careers: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <Section viewAllLink="/careers/" viewAllText="View Full Career Path">
    <template #title>
      Recent <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Career</span>
    </template>

    <div class="flex flex-col gap-6">
      <CareerCard
        v-for="career in careers"
        :key="career.title"
        :career="career"
      />
    </div>
  </Section>
</template>
