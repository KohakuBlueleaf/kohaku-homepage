<script setup>
/**
 * @typedef {Object} Props
 * @property {'default' | 'alt'} [variant] - Gradient variant
 */
defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'alt'].includes(v),
  },
});
</script>

<template>
  <span
    :class="[
      'bg-clip-text text-transparent bg-gradient-to-r',
      variant === 'alt'
        ? 'from-pink-400 to-purple-500'
        : 'from-cyan-400 to-blue-500',
    ]"
  >
    <slot />
  </span>
</template>
