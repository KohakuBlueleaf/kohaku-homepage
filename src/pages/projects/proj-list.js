/* eslint-disable import/no-unresolved */
import { ColorTags } from 'astro-boilerplate-components';
import lycorisIcon from '@/images/icon.webp';
import sdwebuiIcon from '@/images/sd-webui.webp';
import kohakuModelIcon from '@/images/00905.webp';

const projs = [
  {
    name: 'LyCORIS',
    description: `
      Lora beYond Conventional methods, 
      Other Rank adaptation Implementations for Stable diffusion.`,
    link: 'https://github.com/KohakuBlueleaf/LyCORIS',
    category: [
      { color: ColorTags.YELLOW, name: 'python' },
      { color: ColorTags.FUCHSIA, name: 'Neural Network' },
      { color: ColorTags.LIME, name: 'Stable Diffusion' },
    ],
    img: { src: lycorisIcon.src, alt: 'Project LyCORIS' },
  },
  {
    name: 'Stable Diffusion Webui (Collaborator)',
    description: `Stable Diffusion web UI`,
    link: 'https://github.com/AUTOMATIC1111/stable-diffusion-webui',
    category: [
      { color: ColorTags.YELLOW, name: 'python' },
      { color: ColorTags.FUCHSIA, name: 'Neural Network' },
      { color: ColorTags.LIME, name: 'Stable Diffusion' },
    ],
    img: { src: sdwebuiIcon.src, alt: 'Automatic1111 avatar' },
  },
  {
    name: 'Kohaku series SD/SDXL models',
    description: `A series of anime style Stable Diffusion models.`,
    link: 'https://civitai.com/user/kblueleaf',
    category: [
      { color: ColorTags.LIME, name: 'Stable Diffusion' },
      { color: ColorTags.LIME, name: 'Pretrained Models' },
    ],
    img: { src: kohakuModelIcon.src, alt: 'Kohaku Model Icon' },
  },
];

export default projs;
