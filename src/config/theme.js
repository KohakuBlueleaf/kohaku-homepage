// Theme configuration for Kohaku Homepage
// Centralized design tokens

export const colors = {
  // Background colors
  bg: {
    base: '#0f172a',      // slate-900
    card: '#1e293b',      // slate-800
    cardHover: '#334155', // slate-700
  },

  // Text colors
  text: {
    primary: '#f1f5f9',   // slate-100
    secondary: '#cbd5e1', // slate-300
    muted: '#94a3b8',     // slate-400
  },

  // Accent colors
  accent: {
    cyan: '#22d3ee',
    blue: '#3b82f6',
    pink: '#ec4899',
    purple: '#a855f7',
  },
};

// Tag color mappings (name -> UnoCSS shortcut)
export const tagColors = {
  // Programming languages
  python: 'tag-python',
  verilog: 'tag-verilog',

  // Categories
  'neural network': 'tag-neural',
  'stable diffusion': 'tag-sd',
  llm: 'tag-llm',
  'pretrained models': 'tag-model',
  infra: 'tag-infra',
  dataset: 'tag-dataset',
  research: 'tag-research',
  'open source': 'tag-opensource',
  'logic design': 'tag-logic',
  'ai accelerator': 'tag-model',
  'cv algorithm': 'tag-cv',
  pytorch: 'tag-neural',
  'generative ai': 'tag-sd',

  // Venues
  arxiv: 'tag-arxiv',
  'iclr 2024': 'tag-iclr',
};

// Get tag class by name (case insensitive)
export function getTagClass(tagName) {
  const normalized = tagName.toLowerCase();
  return tagColors[normalized] || 'tag';
}

// Gradients
export const gradients = {
  primary: 'from-cyan-400 to-blue-500',
  alt: 'from-pink-400 to-purple-500',
  hero: 'from-cyan-500 via-blue-500 to-purple-500',
  card: 'from-slate-800 to-slate-900',
};

// Social links
export const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/KohakuBlueleaf',
    icon: 'i-carbon-logo-github',
  },
  {
    name: 'Email',
    href: 'mailto:kohaku@kblueleaf.net',
    icon: 'i-carbon-email',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/適穎-葉-80797327b/',
    icon: 'i-carbon-logo-linkedin',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/KBlueleaf',
    icon: 'i-carbon-logo-x',
  },
  {
    name: 'Bilibili',
    href: 'https://space.bilibili.com/507303431',
    icon: 'i-carbon-video',
  },
];

export default {
  colors,
  tagColors,
  getTagClass,
  gradients,
  socialLinks,
};
