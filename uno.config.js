import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/',
    }),
  ],
  shortcuts: {
    // Layout
    'flex-center': 'flex items-center justify-center',
    'flex-between': 'flex items-center justify-between',

    // Containers
    'container-base': 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8',
    'container-narrow': 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8',

    // Cards
    'card': 'bg-slate-800 rounded-lg border border-slate-700 overflow-hidden',
    'card-hover': 'card hover:border-cyan-500/50 transition-all duration-300',
    'card-project': 'card-hover flex gap-4 p-4',
    'card-career': 'card-hover flex gap-4 p-6',
    'card-publication': 'card p-4 hover:bg-slate-750 transition-colors duration-300',
    'card-blog': 'card-hover overflow-hidden',

    // Tags
    'tag': 'px-2 py-0.5 rounded text-xs font-medium inline-block',
    'tag-python': 'tag bg-green-500/20 text-green-400 border border-green-500/30',
    'tag-neural': 'tag bg-fuchsia-500/20 text-fuchsia-400 border border-fuchsia-500/30',
    'tag-sd': 'tag bg-lime-500/20 text-lime-400 border border-lime-500/30',
    'tag-llm': 'tag bg-blue-500/20 text-blue-400 border border-blue-500/30',
    'tag-model': 'tag bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
    'tag-infra': 'tag bg-gray-500/20 text-gray-400 border border-gray-500/30',
    'tag-arxiv': 'tag bg-red-500/20 text-red-400 border border-red-500/30',
    'tag-iclr': 'tag bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
    'tag-dataset': 'tag bg-violet-500/20 text-violet-400 border border-violet-500/30',
    'tag-research': 'tag bg-sky-500/20 text-sky-400 border border-sky-500/30',
    'tag-opensource': 'tag bg-green-500/20 text-green-400 border border-green-500/30',
    'tag-verilog': 'tag bg-orange-500/20 text-orange-400 border border-orange-500/30',
    'tag-logic': 'tag bg-pink-500/20 text-pink-400 border border-pink-500/30',
    'tag-cv': 'tag bg-cyan-500/20 text-cyan-400 border border-cyan-500/30',

    // Buttons
    'btn': 'px-4 py-2 rounded-md cursor-pointer transition-all duration-300 font-medium inline-flex items-center gap-2',
    'btn-primary': 'btn bg-cyan-600 text-white hover:bg-cyan-700 active:scale-95',
    'btn-secondary': 'btn bg-slate-700 text-gray-200 hover:bg-slate-600 active:scale-95',
    'btn-outline': 'btn border border-slate-600 text-gray-300 hover:bg-slate-800 hover:border-cyan-500/50',

    // Text
    'gradient-text': 'bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500',
    'gradient-text-alt': 'bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500',
    'text-muted': 'text-gray-400',
    'text-body': 'text-gray-300',

    // Section
    'section-title': 'text-3xl font-bold',
    'section-subtitle': 'text-gray-400 mt-2',
    'section-gap': 'space-y-8',

    // Links
    'link': 'text-cyan-400 hover:text-cyan-300 transition-colors duration-200',
    'link-nav': 'text-gray-300 hover:text-white transition-colors duration-200',
  },
  theme: {
    colors: {
      primary: {
        50: '#ecfeff',
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
      },
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  content: {
    pipeline: {
      include: [
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        'src/**/*.{js,ts}',
      ],
    },
  },
});
