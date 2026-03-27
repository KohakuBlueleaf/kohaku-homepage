// Projects data for Kohaku Homepage

export const projects = [
  {
    name: 'LyCORIS',
    description:
      'Lora beYond Conventional methods. Comprehensive PEFT library for neural networks, published at ICLR 2024.',
    link: 'https://github.com/KohakuBlueleaf/LyCORIS',
    tags: ['Python', 'Neural Network', 'Research'],
  },
  {
    name: 'TIPO',
    description:
      'Text to Image with Text Presampling for Optimal Prompting. Published at ICLR 2026.',
    link: 'https://github.com/KohakuBlueleaf/KGen',
    tags: ['Python', 'Neural Network', 'LLM', 'Research'],
  },
  {
    name: 'KohakuHub',
    description:
      'Self-hosted HuggingFace alternative, fully compatible with HuggingFace Hub, Transformers and Diffusers.',
    link: 'https://github.com/KohakuBlueleaf/KohakuHub',
    tags: ['Infra', 'Full Stack', 'Dataset'],
  },
  {
    name: 'KohakuRiver',
    description:
      'Lightweight cluster manager that turns a small fleet of nodes into one powerful computer using Docker.',
    link: 'https://github.com/KohakuBlueleaf/KohakuRiver',
    tags: ['Infra', 'Python'],
  },
  {
    name: 'KohakuBoardGame',
    description:
      'Board game engine with NNUE neural network evaluation and PVS search. Supports MiniChess, MiniShogi, and Gomoku.',
    link: 'https://github.com/KohakuBlueleaf/KohakuBoardGame',
    tags: ['C++', 'Python', 'Neural Network'],
  },
  {
    name: 'KohakuTerrarium',
    description:
      'Async-first Python agent framework. YAML-driven config with nested sub-agents and channel-based coordination.',
    link: 'https://github.com/Kohaku-Lab/KohakuTerrarium',
    tags: ['Python', 'LLM', 'Framework'],
  },
  {
    name: 'HDM',
    description:
      'Home-made Diffusion Model. Training quality text-to-image models on consumer-level hardware.',
    link: 'https://github.com/KohakuBlueleaf/HDM',
    tags: ['Python', 'Neural Network', 'Generative AI'],
  },
  {
    name: 'KohakuRAG',
    description:
      '#1 in Wattbot2025. Hierarchical RAG framework with context-aware search and single-file SQLite storage.',
    link: 'https://github.com/Kohaku-Lab/KohakuRAG',
    tags: ['Python', 'LLM', 'RAG', 'Framework'],
  },
  {
    name: 'KohakuBoard',
    description:
      'Self-hosted W&B alternative with async logging, efficient storage and fast visualization frontend.',
    link: 'https://github.com/KohakuBlueleaf/KohakuBoard',
    tags: ['Infra', 'Full Stack', 'Training'],
  },
  {
    name: 'KohakuVault',
    description:
      'Single-file key-value/columnar store built on SQLite with Rust. Supports vector search and auto msgpack.',
    link: 'https://github.com/KohakuBlueleaf/KohakuVault',
    tags: ['Database', 'Vector Search', 'Python', 'Rust'],
  },
  {
    name: 'PixelOE',
    description:
      'Detail-Oriented Pixelization based on Contrast-Aware Outline Expansion.',
    link: 'https://github.com/KohakuBlueleaf/PixelOE',
    tags: ['Python', 'CV Algorithm'],
  },
];

// Get recent projects (for homepage)
export function getRecentProjects(count = 4) {
  return projects.slice(0, count);
}

// Get all unique tags
export function getAllTags() {
  const tags = new Set();
  projects.forEach((project) => {
    project.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}

// Filter projects by tag
export function filterByTag(tag) {
  return projects.filter((project) =>
    project.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

export default projects;
