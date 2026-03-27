// Site configuration for Kohaku Homepage

export const siteConfig = {
  name: 'Kohaku BlueLeaf',
  title: "Kohaku's Homepage",
  description: 'Homepage for Shih-Ying Yeh (A.K.A Kohaku BlueLeaf)',
  author: 'kblueleaf',
  locale: 'en',
  localeRegion: 'en-us',
  url: 'https://kblueleaf.net',
};

export const navigation = [
  { name: 'Projects', href: '/projects/' },
  { name: 'Publications', href: '/pubs/' },
  { name: 'Career', href: '/careers/' },
  { name: 'Blogs', href: '/posts/' },
  // { name: 'Gallery', href: '/gallery/' },  // Hidden for now
];

export const heroData = {
  name: 'Kohaku BlueLeaf',
  nameLocal: 'Shih-Ying, Yeh',
  nameChinese: '葉適穎',
  badge: '/assets/images/kohaku-badge.webp',
  avatar: '/assets/images/kohaku-bg-full.webp',
  bio: [
    "CS master's student at National Tsing Hua University in Taiwan. Published at ICLR 2024 (LyCORIS) and ICLR 2026 (TIPO).",
    'I research and build AI systems end-to-end — from neural network training and GPU kernels to infrastructure, databases, RAG frameworks, and agent systems.',
    'Leading Kohaku Lab, a virtual open-source research lab. Currently exploring VAE/AE/VQ-VAE architectures for generative modeling, building agent frameworks (KohakuTerrarium), and playing with AI board game engines. Everything we build is 100% open access.',
  ],
  quote: 'AI art should look like AI, not humans.',
};

export const footerData = {
  copyright: 'Kohaku BlueLeaf',
  license: 'CC BY-NC-ND 4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
};

export default {
  siteConfig,
  navigation,
  heroData,
  footerData,
};
