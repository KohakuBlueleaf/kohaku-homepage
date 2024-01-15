/* eslint-disable import/no-unresolved */
import { ColorTags } from 'astro-boilerplate-components';
import lycorisIcon from '@/images/icon.png';

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
];

export default { projs };
