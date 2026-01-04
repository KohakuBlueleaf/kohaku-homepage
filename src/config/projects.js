// Projects data for Kohaku Homepage

export const projects = [
  {
    name: 'LyCORIS',
    description:
      'Lora beYond Conventional methods, Other Rank adaptation Implementations for Stable diffusion.',
    link: 'https://github.com/KohakuBlueleaf/LyCORIS',
    tags: ['Python', 'Neural Network', 'Stable Diffusion'],
  },
  {
    name: 'TIPO',
    description: 'Text to Image with Text Presampling for Optimal Prompting.',
    link: 'https://github.com/KohakuBlueleaf/KGen',
    tags: ['Python', 'Neural Network', 'LLM'],
  },
  {
    name: 'HDM (Home Diffusion Model)',
    description:
      'A series of minimalist T2I model trained on consumer level hardware.',
    link: 'https://huggingface.co/KBlueLeaf/HDM-xut-340M-anime',
    tags: ['Pretrained Models', 'Stable Diffusion'],
  },
  {
    name: 'KohakuRAG',
    description:
      '#1 in Wattbot2025. Domain-agnostic Retrieval-Augmented Generation (RAG) framework designed for production use.',
    link: 'https://github.com/KohakuBlueleaf/KohakuRAG',
    tags: ['Python', 'LLM', 'RAG', 'Framework'],
  },
  {
    name: 'KohakuHub',
    description:
      'An open sourced alternative for HuggingFace, fully compatible with HuggingFace Hub, Transformers and Diffusers.',
    link: 'https://github.com/KohakuBlueleaf/KohakuHub',
    tags: ['Infra', 'Full Stack', 'Dataset'],
  },
  {
    name: 'KohakuBoard',
    description:
      'An open sourced alternative for WandB with async logging, efficient storing and fast frontend for visualization.',
    link: 'https://github.com/KohakuBlueleaf/KohakuBoard',
    tags: ['Infra', 'Full Stack', 'Training'],
  },
  {
    name: 'PixelOE',
    description:
      'Detail-Oriented Pixelization based on Contrast-Aware Outline Expansion.',
    link: 'https://github.com/KohakuBlueleaf/PixelOE',
    tags: ['Python', 'CV Algorithm'],
  },
  {
    name: 'KohakuVault',
    description:
      'Key-Value/Columnar storage based on SQLite with Rust, supports vector search and auto msgpack of python object.',
    link: 'https://github.com/KohakuBlueleaf/KohakuVault',
    tags: ['Database', 'Vector Search', 'Python', 'Rust'],
  },
  {
    name: 'Kohaku SD/SDXL Models',
    description: 'A series of anime style Stable Diffusion models.',
    link: 'https://civitai.com/user/kblueleaf',
    tags: ['Pretrained Models', 'Stable Diffusion'],
  },
  {
    name: 'HakuTPU [WIP]',
    description: 'AI Accelerator softcore for Xilinx UltraScale+ FPGAs.',
    link: 'https://github.com/KohakuBlueleaf/HakuTPU',
    tags: ['Verilog', 'Logic Design', 'AI Accelerator'],
  },
  {
    name: 'SenseCraft',
    description: 'Unified Perceptual Feature Loss Framework.',
    link: 'https://github.com/KohakuBlueleaf/SenseCraft',
    tags: ['PyTorch', 'Neural Network', 'CV'],
  },
  {
    name: 'OptimFactory',
    description:
      'A set of optimizer utils to utilize frontier hyperparam transfer rules/algos.',
    link: 'https://github.com/KohakuBlueleaf/OptimFactory',
    tags: ['PyTorch', 'Neural Network', 'Training'],
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
