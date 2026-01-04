<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['select'])

const handleClick = () => {
  emit('select')
}
</script>

<template>
  <div
    class="cursor-pointer overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 hover:ring-2 hover:ring-purple-500/50"
    @click="handleClick"
  >
    <img
      :src="src"
      :alt="alt"
      class="aspect-square h-full w-full object-cover"
    />
  </div>
</template>
