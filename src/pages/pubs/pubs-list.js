import { ColorTags } from 'astro-boilerplate-components';

const pubs = [
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
