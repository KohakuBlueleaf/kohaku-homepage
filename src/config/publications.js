// Publications data for Kohaku Homepage

export const publications = [
  {
    title: 'TIPO: Text to Image with Text Presampling for Prompt Optimization',
    authors: [
      { name: 'Shin-Ying Yeh', highlight: true },
      { name: 'YI LI' },
      { name: 'Sang-Hyun Park' },
      { name: 'Giyeong Oh' },
      { name: 'Xuehai Wang' },
      { name: 'Min Song' },
      { name: 'Youngjae Yu' },
      { name: 'Shang-Hong Lai' },
    ],
    venue: 'ICLR',
    year: 2026,
    link: 'https://openreview.net/forum?id=dDnw3Pp70x',
  },
  {
    title: 'ImagenWorld: Stress-Testing Image Generation Models with Explainable Human Evaluation on Open-ended Real-World Tasks',
    authors: [
      { name: 'Samin Mahdizadeh Sani' },
      { name: 'Max Ku' },
      { name: 'Nima Jamali' },
      { name: 'Matina Mahdizadeh Sani' },
      { name: 'Paria Khoshtab' },
      { name: 'Wei-Chieh Sun' },
      { name: 'Parnian Fazel' },
      { name: 'Zhi Rui Tam' },
      { name: 'Thomas Chong' },
      { name: 'Edisy Kin Wai Chan' },
      { name: 'Donald Wai Tong Tsang' },
      { name: 'Chiao-Wei Hsu' },
      { name: 'Lam Ting Wai' },
      { name: 'Ho Yin Sam Ng' },
      { name: 'Chiafeng Chu' },
      { name: 'Chak-Wing Mak' },
      { name: 'Keming Wu' },
      { name: 'Hiu Tung Wong' },
      { name: 'Yik Chun Ho' },
      { name: 'Chi Ruan' },
      { name: 'Zhuofeng Li' },
      { name: 'I-Sheng Fang' },
      { name: 'Shih-Ying Yeh', highlight: true },
      { name: 'Ho Kei Cheng' },
      { name: 'Ping Nie' },
      { name: 'Wenhu Chen' },
    ],
    venue: 'ICLR',
    year: 2026,
    link: 'https://openreview.net/forum?id=bld9g6jFh9',
  },
  {
    title: 'Home-made Diffusion Model from Scratch to Hatch',
    authors: [
      { name: 'Shih-Ying Yeh', highlight: true },
    ],
    venue: 'Arxiv',
    year: 2025,
    link: 'https://arxiv.org/abs/2509.06068',
  },
  {
    title:
      'Graph-Based Captioning: Enhancing Visual Descriptions by Interconnecting Region Captions',
    authors: [
      { name: 'Yu-Guan Hsieh' },
      { name: 'Cheng-Yu Hsieh' },
      { name: 'Shin-Ying Yeh', highlight: true },
      { name: 'Louis Béthune' },
      { name: 'Hadi Pouransari' },
      { name: 'Pavan Kumar Anasosalu Vasu' },
      { name: 'Chun-Liang Li' },
      { name: 'Ranjay Krishna' },
      { name: 'Oncel Tuzel' },
      { name: 'marco cuturi' },
    ],
    venue: 'Arxiv',
    year: 2024,
    link: 'https://arxiv.org/abs/2407.06723',
  },
  {
    title:
      'Navigating Text-To-Image Customization: From LyCORIS Fine-Tuning to Model Evaluation',
    authors: [
      { name: 'Shin-Ying Yeh', highlight: true },
      { name: 'Yu-Guan Hsieh' },
      { name: 'Zhidong Gao' },
      { name: 'Bernard B W Yang' },
      { name: 'Giyeong Oh' },
      { name: 'Yanmin Gong' },
    ],
    venue: 'ICLR 2024',
    year: 2024,
    link: 'https://openreview.net/forum?id=wfzXa8e783',
  },
];

// Format authors as string with highlighting
export function formatAuthors(authors) {
  return authors
    .map((a) => (a.highlight ? `**${a.name}**` : a.name))
    .join(', ');
}

// Get recent publications (for homepage)
export function getRecentPublications(count = 3) {
  return publications.slice(0, count);
}

export default publications;
