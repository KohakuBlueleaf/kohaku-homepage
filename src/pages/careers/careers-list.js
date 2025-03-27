import { ColorTags } from "astro-boilerplate-components";
import elementLogo from "@/images/element-icon.jpeg";
import comfyLogo from "@/images/comfy-icon.avif";
import badappleLogo from "@/images/badapple-logo.jpg";

const careers = [
  {
    title: "Open Source Contributor",
    company: "Kohaku Lab",
    logo: {
      src: "/src/images/lycoris.webp", // Assuming you want to use existing icon
      alt: "LyCORIS Logo",
    },
    time: "Apr 2023 - Present",
    salary: "Volunteer",
    location: "Remote / GitHub",
    description: `
      Developed and maintained open-source projects related to computer vision and AI.
      Included personal project such as LyCORIS, TIPO, PixelOE, HakuLatent and more,
      and community projects such as stable-diffusion-webui, sd-scripts and more.
    `,
    keywords: [
      { color: ColorTags.YELLOW, name: "Python" },
      { color: ColorTags.FUCHSIA, name: "Neural Network" },
      { color: ColorTags.GREEN, name: "Open Source" },
    ],
  },
  {
    title: "ML/NN Engineer (Part-time)",
    company: "Comfy Org",
    logo: {
      src: comfyLogo.src, // Use a placeholder or actual path
      alt: "Comfy Org",
    },
    time: "Mar 2025 - present",
    salary: "500 USD/week ‧ 5~10 hour per week", // Example format
    location: "Remote",
    description: `
      Collaborated with comfy team to improve the usability and performance of Comfy UI eco system.
      Mainly working on lora-related system such as lora loader, weight patcher and trainer.
    `,
    keywords: [
      { color: ColorTags.YELLOW, name: "Python" },
      { color: ColorTags.FUCHSIA, name: "PyTorch" },
      { color: ColorTags.GREEN, name: "Open Source" },
      { color: ColorTags.LIME, name: "Generative AI" },
    ],
  },
  {
    title: "ML Engineer",
    company: "Apple",
    logo: {
      src: badappleLogo.src, // Use a placeholder or actual path
      alt: "Apple",
    },
    time: "Jul 2024 - Nov 2024",
    salary: "70 USD/hour", // Example format
    location: "Remote",
    description: `
      Collaborate with research team in Apple Inc. to explore the possibility of new form dataset.
      The works:
      "Graph-Based Captioning: Enhancing Visual Descriptions by Interconnecting Region Captions"
      have published on Arxiv and Apple official github.
    `,
    keywords: [
      { color: ColorTags.YELLOW, name: "Python" },
      { color: ColorTags.FUCHSIA, name: "PyTorch" },
      { color: ColorTags.VIOLET, name: "Dataset" },
      { color: ColorTags.LIME, name: "Generative AI" },
      { color: ColorTags.SKY, name: "Research" },
    ],
  },
  {
    title: "Consultant",
    company: "Element, Inc.",
    logo: {
      src: elementLogo.src, // Use a placeholder or actual path
      alt: "Awesome AI Lab Logo",
    },
    time: "Sep 2023 - Jul 2024",
    salary: "20~100 USD/hour", // Example format
    location: "Remote",
    description: `
      Worked with the team to provide insights and solutions for the company's AI projects.
      Mainly focused on personalized Text-to-Image experience and video-to-video features.
    `,
    keywords: [
      { color: ColorTags.YELLOW, name: "Python" },
      { color: ColorTags.FUCHSIA, name: "PyTorch" },
      { color: ColorTags.LIME, name: "Generative AI" },
    ],
  },
];

export default careers;
