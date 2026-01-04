// Projects data for Kohaku Homepage

export const projects = [
  {
    name: 'LyCORIS',
    description:
      'Lora beYond Conventional methods, Other Rank adaptation Implementations for Stable diffusion.',
    link: 'https://github.com/KohakuBlueleaf/LyCORIS',
    tags: ['python', 'Neural Network', 'Stable Diffusion'],
    image: '/assets/projects/lycoris.webp',
  },
  {
    name: 'TIPO',
    description: 'Text to Image with Text Presampling for Optimal Prompting.',
    link: 'https://github.com/KohakuBlueleaf/KGen',
    tags: ['python', 'Neural Network', 'LLM'],
    image: '/assets/projects/tipo-icon.jpg',
  },
  {
    name: 'PixelOE',
    description:
      'Detail-Oriented Pixelization based on Contrast-Aware Outline Expansion.',
    link: 'https://github.com/KohakuBlueleaf/PixelOE',
    tags: ['python', 'CV algorithm'],
    image: '/assets/projects/pixeloe-icon.jpg',
  },
  {
    name: 'HDM(Home Diffusion Model)',
    description:
      'A series of minimalist T2I model trained on customer level hardware',
    link: 'https://huggingface.co/KBlueLeaf/HDM-xut-340M-anime',
    tags: ['Pretrained Models'],
    image: '/assets/projects/HDM-icon.jpeg',
  },
  {
    name: 'Kohaku series SD/SDXL models',
    description: 'A series of anime style Stable Diffusion models.',
    link: 'https://civitai.com/user/kblueleaf',
    tags: ['Stable Diffusion', 'Pretrained Models'],
    image: '/assets/projects/kohaku-series-model-icon.webp',
  },
  {
    name: 'HakuTPU [WIP]',
    description: 'AI Accelerator softcore for Xilinx UltraScale+ FPGAs.',
    link: 'https://github.com/KohakuBlueleaf/HakuTPU',
    tags: ['Verilog', 'Logic Design', 'AI Accelerator'],
    image: '/assets/projects/HakuTPU-icon.webp',
  },
  {
    name: 'Stable Diffusion Webui (Collaborator)',
    description: 'Stable Diffusion web UI',
    link: 'https://github.com/AUTOMATIC1111/stable-diffusion-webui',
    tags: ['python', 'Neural Network', 'Stable Diffusion'],
    image: '/assets/projects/sd-webui.webp',
  },
  {
    name: 'HakuBooru',
    description: 'text-image dataset maker for anime-style images',
    link: 'https://github.com/KohakuBlueleaf/HakuBooru',
    tags: ['Dataset'],
    image: '/assets/projects/hakubooru-icon.webp',
  },
  {
    name: 'HakuLatent',
    description:
      'A comprehensive codebase for training and finetuning Image <> Latent models.',
    link: 'https://github.com/KohakuBlueleaf/HakuLatent',
    tags: ['Neural Network'],
    image: '',
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
