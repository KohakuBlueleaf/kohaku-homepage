<script setup>
import { computed } from 'vue';

/**
 * @typedef {Object} Props
 * @property {string} tag - Tag text to display
 * @property {string} [variant] - Optional color variant override
 */
const props = defineProps({
  tag: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: undefined,
  },
});

/** @type {Record<string, string>} */
const tagColorMap = {
  python: "bg-green-400/20 text-green-400",
  Python: "bg-green-400/20 text-green-400",
  "Neural Network": "bg-fuchsia-400/20 text-fuchsia-400",
  PyTorch: "bg-fuchsia-400/20 text-fuchsia-400",
  "Stable Diffusion": "bg-lime-400/20 text-lime-400",
  "Generative AI": "bg-lime-400/20 text-lime-400",
  LLM: "bg-blue-400/20 text-blue-400",
  "Pretrained Models": "bg-yellow-400/20 text-yellow-400",
  "AI Accelerator": "bg-yellow-400/20 text-yellow-400",
  Dataset: "bg-violet-400/20 text-violet-400",
  Research: "bg-sky-400/20 text-sky-400",
  "Open Source": "bg-green-400/20 text-green-400",
  Arxiv: "bg-red-400/20 text-red-400",
  "ICLR 2024": "bg-emerald-400/20 text-emerald-400",
  Verilog: "bg-orange-400/20 text-orange-400",
  "Logic Design": "bg-pink-400/20 text-pink-400",
  "CV algorithm": "bg-cyan-400/20 text-cyan-400",
};

/** @type {Record<string, string>} */
const variantColorMap = {
  green: "bg-green-400/20 text-green-400",
  fuchsia: "bg-fuchsia-400/20 text-fuchsia-400",
  lime: "bg-lime-400/20 text-lime-400",
  blue: "bg-blue-400/20 text-blue-400",
  yellow: "bg-yellow-400/20 text-yellow-400",
  violet: "bg-violet-400/20 text-violet-400",
  sky: "bg-sky-400/20 text-sky-400",
  red: "bg-red-400/20 text-red-400",
  emerald: "bg-emerald-400/20 text-emerald-400",
  orange: "bg-orange-400/20 text-orange-400",
  pink: "bg-pink-400/20 text-pink-400",
  cyan: "bg-cyan-400/20 text-cyan-400",
};

const defaultColor = "bg-slate-400/20 text-slate-400";

const colorClass = computed(() => {
  if (props.variant && variantColorMap[props.variant]) {
    return variantColorMap[props.variant];
  }
  return tagColorMap[props.tag] || defaultColor;
});
</script>

<template>
  <span
    :class="[
      'px-2 py-0.5 rounded text-xs font-medium',
      colorClass,
    ]"
  >
    {{ tag }}
  </span>
</template>
