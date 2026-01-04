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
    "I am a graduate student doing my master's in the Computer Science Department at National Tsing Hua University in Taiwan.",
    'I am interested in improving the performance of Generative AI, focusing on training better models, building efficient and robust systems, and developing useful tools.',
    "I'm currently working on project: HomeDiffusion. HomeDiffusion seeks to enable pretrained diffusion models on consumer-level hardware. And we already have a usable model: HDM-xut-340M-anime. Which is trained with 1500 GPU hour on 5090.",
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
