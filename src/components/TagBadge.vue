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

/**
 * Tag color mappings organized by category:
 * - Languages: green (Python), orange (Rust, Verilog)
 * - ML/AI Frameworks: rose (PyTorch), fuchsia (Neural Network)
 * - AI Domains: blue (LLM), cyan (CV), lime (Stable Diffusion, Generative AI)
 * - Model Types: yellow (Pretrained Models), amber (AI Accelerator)
 * - Infrastructure: slate (Infra), violet (Database), teal (Vector Search)
 * - Frameworks/Tools: indigo (RAG), pink (Full Stack, Logic Design)
 * - Venues: emerald (conferences), red (Arxiv)
 */
/** @type {Record<string, string>} */
const tagColorMap = {
  // Languages
  Python: "bg-green-500/20 text-green-400",
  Rust: "bg-orange-500/20 text-orange-400",
  Verilog: "bg-orange-500/20 text-orange-400",

  // ML/AI Frameworks & Core
  PyTorch: "bg-rose-500/20 text-rose-400",
  "Neural Network": "bg-fuchsia-500/20 text-fuchsia-400",

  // AI Domains
  LLM: "bg-blue-500/20 text-blue-400",
  CV: "bg-cyan-500/20 text-cyan-400",
  "Stable Diffusion": "bg-lime-500/20 text-lime-400",
  "Generative AI": "bg-lime-500/20 text-lime-400",

  // Model Types
  "Pretrained Models": "bg-yellow-500/20 text-yellow-400",
  "AI Accelerator": "bg-amber-500/20 text-amber-400",

  // Infrastructure & Data
  Infra: "bg-slate-500/20 text-slate-300",
  Database: "bg-violet-500/20 text-violet-400",
  "Vector Search": "bg-teal-500/20 text-teal-400",
  Dataset: "bg-violet-500/20 text-violet-400",
  Training: "bg-rose-500/20 text-rose-400",

  // Frameworks & Tools
  RAG: "bg-indigo-500/20 text-indigo-400",
  Framework: "bg-sky-500/20 text-sky-400",
  "Full Stack": "bg-pink-500/20 text-pink-400",
  "Logic Design": "bg-pink-500/20 text-pink-400",
  "CV Algorithm": "bg-cyan-500/20 text-cyan-400",

  // Publication Venues
  Arxiv: "bg-red-500/20 text-red-400",
  "ICLR 2024": "bg-emerald-500/20 text-emerald-400",

  // Legacy mappings (for compatibility)
  Research: "bg-sky-500/20 text-sky-400",
  "Open Source": "bg-green-500/20 text-green-400",
};

/** @type {Record<string, string>} */
const variantColorMap = {
  green: "bg-green-500/20 text-green-400",
  fuchsia: "bg-fuchsia-500/20 text-fuchsia-400",
  lime: "bg-lime-500/20 text-lime-400",
  blue: "bg-blue-500/20 text-blue-400",
  yellow: "bg-yellow-500/20 text-yellow-400",
  violet: "bg-violet-500/20 text-violet-400",
  sky: "bg-sky-500/20 text-sky-400",
  red: "bg-red-500/20 text-red-400",
  emerald: "bg-emerald-500/20 text-emerald-400",
  orange: "bg-orange-500/20 text-orange-400",
  pink: "bg-pink-500/20 text-pink-400",
  cyan: "bg-cyan-500/20 text-cyan-400",
  rose: "bg-rose-500/20 text-rose-400",
  indigo: "bg-indigo-500/20 text-indigo-400",
  teal: "bg-teal-500/20 text-teal-400",
  amber: "bg-amber-500/20 text-amber-400",
  slate: "bg-slate-500/20 text-slate-300",
};

const defaultColor = "bg-slate-500/20 text-slate-400";

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
