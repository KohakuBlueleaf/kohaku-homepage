import { ColorTags } from 'astro-boilerplate-components';

const pubs = [
  {
    name: 'Navigating Text-To-Image Customization: From LyCORIS Fine-Tuning to Model Evaluation',
    description: `
      <span style='color: yellow'>Shin-Ying Yeh</span>, Yu-Guan Hsieh, 
      Zhidong Gao, Bernard B W Yang, Giyeong Oh, Yanmin Gong`,
    link: 'https://arxiv.org/abs/2309.14859',
    category: [
      {
        color: ColorTags.RED,
        name: 'arxiv',
      },
    ],
  },
];

export default { pubs };
