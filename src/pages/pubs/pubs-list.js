import { ColorTags } from 'astro-boilerplate-components';

const pubs = [
  {
    name: 'TIPO: Text to Image with Text Presampling for Prompt Optimization',
    description: `<span style='color: yellow'>Shin-Ying Yeh</span>, Sang-Hyun Park, Giyeong Oh, Min Song, Youngjae Yu`,
    link: 'http://arxiv.org/abs/2411.08127',
    category: [
      {
        color: ColorTags.RED,
        name: 'Arxiv',
      },
    ],
  },
  {
    name: 'Graph-Based Captioning: Enhancing Visual Descriptions by Interconnecting Region Captions',
    description: `
      Yu-Guan Hsieh, Cheng-Yu Hsieh, <span style='color: yellow'>Shin-Ying Yeh</span>, 
      Louis Béthune, Hadi Pouransari, Pavan Kumar Anasosalu Vasu, Chun-Liang Li, 
      Ranjay Krishna, Oncel Tuzel, marco cuturi`,
    link: 'https://arxiv.org/abs/2407.06723',
    category: [
      {
        color: ColorTags.RED,
        name: 'Arxiv',
      },
    ],
  },
  {
    name: 'Navigating Text-To-Image Customization: From LyCORIS Fine-Tuning to Model Evaluation',
    description: `
      <span style='color: yellow'>Shin-Ying Yeh</span>, Yu-Guan Hsieh, 
      Zhidong Gao, Bernard B W Yang, Giyeong Oh, Yanmin Gong`,
    link: 'https://openreview.net/forum?id=wfzXa8e783',
    category: [
      {
        color: ColorTags.GREEN,
        name: 'ICLR 2024',
      },
    ],
  },
];

export default pubs;
