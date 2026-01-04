// Career data for Kohaku Homepage

export const careers = [
  {
    title: 'Open Source Contributor',
    company: 'Kohaku Lab',
    logo: '/assets/careers/lycoris.webp',
    startDate: 'Apr 2023',
    endDate: 'Present',
    salary: 'Volunteer',
    location: 'Remote / GitHub',
    description:
      'Developed and maintained open-source projects related to computer vision and AI. Included personal project such as LyCORIS, TIPO, PixelOE, HakuLatent and more, and community projects such as stable-diffusion-webui, sd-scripts and more.',
    skills: ['Python', 'Neural Network', 'Open Source'],
  },
  {
    title: 'ML/NN Engineer (Part-time)',
    company: 'Comfy Org',
    logo: '/assets/careers/comfy-icon.avif',
    startDate: 'Mar 2025',
    endDate: 'present',
    salary: '500 USD/week',
    hours: '5~10 hour per week',
    location: 'Remote',
    description:
      'Collaborated with comfy team to improve the usability and performance of Comfy UI eco system. Mainly working on lora-related system such as lora loader, weight patcher and trainer.',
    skills: ['Python', 'PyTorch', 'Open Source', 'Generative AI'],
  },
  {
    title: 'ML Engineer',
    company: 'Apple',
    logo: '/assets/careers/badapple-logo.jpg',
    startDate: 'Jul 2024',
    endDate: 'Nov 2024',
    salary: '70 USD/hour',
    location: 'Remote',
    description:
      'Collaborate with research team in Apple Inc. to explore the possibility of new form dataset. The works: "Graph-Based Captioning: Enhancing Visual Descriptions by Interconnecting Region Captions" have published on Arxiv and Apple official github.',
    skills: ['Python', 'PyTorch', 'Dataset', 'Generative AI', 'Research'],
  },
  {
    title: 'Consultant',
    company: 'Element, Inc.',
    logo: '/assets/careers/element-icon.jpeg',
    startDate: 'Sep 2023',
    endDate: 'Jul 2024',
    salary: '20~100 USD/hour',
    location: 'Remote',
    description:
      "Worked with the team to provide insights and solutions for the company's AI projects. Mainly focused on personalized Text-to-Image experience and video-to-video features.",
    skills: ['Python', 'PyTorch', 'Generative AI'],
  },
];

// Get recent careers (for homepage)
export function getRecentCareers(count = 2) {
  return careers.slice(0, count);
}

// Format date range
export function formatDateRange(start, end) {
  return `${start} - ${end}`;
}

export default careers;
