/* eslint-disable import/no-unresolved */
import { ColorTags } from "astro-boilerplate-components";
import lycorisIcon from "@/images/lycoris.webp";
import sdwebuiIcon from "@/images/sd-webui.webp";
import kohakuModelIcon from "@/images/kohaku-series-model-icon.webp";
import hakubooruIcon from "@/images/hakubooru-icon.webp";
import pixeloeIcon from "@/images/pixeloe-icon.jpg";
// import dtgIcon from '@/images/dtg.webp';
import tipoIcon from "@/images/tipo-icon.jpg";
import HakuIcon from "@/images/HakuTPU-icon.webp";

const projs = [
  {
    name: "LyCORIS",
    description: `
      Lora beYond Conventional methods, 
      Other Rank adaptation Implementations for Stable diffusion.`,
    link: "https://github.com/KohakuBlueleaf/LyCORIS",
    category: [
      { color: ColorTags.YELLOW, name: "python" },
      { color: ColorTags.FUCHSIA, name: "Neural Network" },
      { color: ColorTags.LIME, name: "Stable Diffusion" },
    ],
    img: { src: lycorisIcon.src, alt: "Project LyCORIS" },
  },
  {
    name: "TIPO",
    description: `Text to Image with Text Presampling for Optimal Prompting.`,
    link: "https://github.com/KohakuBlueleaf/KGen",
    category: [
      { color: ColorTags.YELLOW, name: "python" },
      { color: ColorTags.FUCHSIA, name: "Neural Network" },
      { color: ColorTags.LIME, name: "LLM" },
    ],
    img: { src: tipoIcon.src, alt: "TIPO Icon" },
  },
  {
    name: "PixelOE",
    description: `Detail-Oriented Pixelization based on Contrast-Aware Outline Expansion.`,
    link: "https://github.com/KohakuBlueleaf/PixelOE",
    category: [
      { color: ColorTags.YELLOW, name: "python" },
      { color: ColorTags.FUCHSIA, name: "CV algorithm" },
    ],
    img: { src: pixeloeIcon.src, alt: "HakuBooru Icon" },
  },
  {
    name: "Kohaku series SD/SDXL models",
    description: `A series of anime style Stable Diffusion models.`,
    link: "https://civitai.com/user/kblueleaf",
    category: [
      { color: ColorTags.LIME, name: "Stable Diffusion" },
      { color: ColorTags.LIME, name: "Pretrained Models" },
    ],
    img: { src: kohakuModelIcon.src, alt: "Kohaku Model Icon" },
  },
  {
    name: "HakuTPU [WIP]",
    description: `AI Accelerator softcore for Xilinx UltraScale+ FPGAs.`,
    link: "https://github.com/KohakuBlueleaf/HakuTPU",
    category: [
      { color: ColorTags.YELLOW, name: "Verilog" },
      { color: ColorTags.FUCHSIA, name: "Logic Design" },
      { color: ColorTags.LIME, name: "AI Accelerator" },
    ],
    img: { src: HakuIcon.src, alt: "HakuTPU Icon" },
  },
  {
    name: "Stable Diffusion Webui (Collaborator)",
    description: `Stable Diffusion web UI`,
    link: "https://github.com/AUTOMATIC1111/stable-diffusion-webui",
    category: [
      { color: ColorTags.YELLOW, name: "python" },
      { color: ColorTags.FUCHSIA, name: "Neural Network" },
      { color: ColorTags.LIME, name: "Stable Diffusion" },
    ],
    img: { src: sdwebuiIcon.src, alt: "Automatic1111 avatar" },
  },
  {
    name: "HakuBooru",
    description: `text-image dataset maker for anime-style images`,
    link: "https://github.com/KohakuBlueleaf/HakuBooru",
    category: [{ color: ColorTags.LIME, name: "Dataset" }],
    img: { src: hakubooruIcon.src, alt: "HakuBooru Icon" },
  },
  {
    name: "HakuLatent",
    description: `A comprehensive codebase for training and finetuning Image <> Latent models.`,
    link: "https://github.com/KohakuBlueleaf/HakuLatent",
    category: [{ color: ColorTags.FUCHSIA, name: "Neural Network" }],
    img: { src: "", alt: "HakuLatent Icon" },
  },
];

export default projs;
