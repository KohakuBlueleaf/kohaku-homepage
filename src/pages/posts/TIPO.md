---
layout: "@/templates/BasePost.astro"
title: TIPO
description: Text to Image with Text Presampling for Prompt Optimization
pubDate: 2024-10-06T23:40:00+8
imgSrc: "/assets/images/tipo-banner.webp"
imgAlt: "Image post"
---

# TIPO: Text to Image with text presampling for Prompt Optimization

Tech Report: https://kblueleaf.net/document/TIPO-tech-report.pdf

![image/png](https://cdn-uploads.huggingface.co/production/uploads/630593e2fca1d8d92b81d2a1/fc9ovmARapQmgq9DZ7ApJ.png)

## Introduction

In this project, we introduce "TIPO" (**T**ext to **I**mage with text presampling for **P**rompt **O**ptimization), an innovative framework designed to significantly enhance the quality and usability of Text-to-Image (T2I) generative models. TIPO utilizes the Large Language Models (LLMs) to perform "Text Presampling" within the inference pipeline of text-to-image generative modeling. By refining and extending user input prompts, TIPO enables generative models to produce superior results with minimal user effort, making T2I systems more accessible and effective for a wider range of users.

## Usage

Use updated version of DTG extension (renamed to z-tipo-extension), current version of z-tipo-extension support stable-diffusion-webui, stable-diffusion-webui-forge and ComfyUI. SD-Next haven't been tested.
https://github.com/KohakuBlueleaf/z-tipo-extension

## Model arch and Training

This model is LLaMA arch with 200M parameters, the training data is combined version of Danbooru2023, GBC10M and Coyo-HD-11M.`<br>`
The total token seen is around 40B tokens.`<br>`
For more information please refer to the tech report and following table.

|                   | TIPO-200M                                                                        | TIPO-500M                                                                        |
| ----------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Arch              | LLaMA                                                                            | LLaMA                                                                            |
| Max ctx length    | 1024                                                                             | 1024                                                                             |
| Batch Size        | 2048                                                                             | 3584                                                                             |
| Training dataset  | Danbooru, GBC10M, 5epoch<br />Danbooru, GBC10M, Coyo11M, 3epoch                  | Danbooru, GBC10M, Coyo11M, 5epoch                                                |
| Real Token Seen\* | 40B token                                                                        | 30B token                                                                        |
| Training Hardware | RTX 3090 x 4                                                                     | H100 x 8                                                                         |
| Training Time     | 420 hour`                                                                        | 100 hour`                                                                        |
| URL               | [KBlueLeaf/TIPO-200M · Hugging Face](https://huggingface.co/KBlueLeaf/TIPO-200M) | [KBlueLeaf/TIPO-500M · Hugging Face](https://huggingface.co/KBlueLeaf/TIPO-500M) |

\*: We only count "non-padding token" in the token seen, since all the training data have very large length range `<br/>`
`: Since the training data is pretty short, it cost more time to reach same token seen than general LLM pretraining.`<br/>`
As reference, with 4096 as max ctx length and almost all the data have reach that length, you may only need 2days to reach 10B token seen on RTX 3090 x 4 with 200M model.

### Evaluation

We have tested TIPO in several metric:

#### 1. Aesthetic Score (Higher is Better)

We compute the Aesthetic Score using the **Aesthetic Predictor V2.5**. This metric is calculated on the short/truncated long test.

![Aesthetic Score Distribution](https://hackmd.io/_uploads/HkJphkSCA.png)

_Figure 1: Aesthetic Score distribution._

#### 2. AI Corrupt Score (Higher is Better)

The AI Corrupt Score is obtained from the **AICorruptMetrics** in **sdeval**.

This metric is calculated on the short/truncated long test.

![AI Corrupt Score Distribution](https://hackmd.io/_uploads/SJlktvE0R.png)

_Figure 2: AI Corrupt Score distribution._

#### 3. Frechet Dino Distance (FDD) on Scenery Tag Test

We use FDD on the Scenery Tag Test to demonstrate that when input prompts address a smaller distribution, the model struggles to generate images that reflect the true distribution. However, with **TIPO**, this issue is mitigated.

| FDD Model    | `<meta> scenery` only | `<meta> scenery` + TIPO |
| ------------ | --------------------- | ----------------------- |
| DinoV2 ViT-S | 0.1917                | **0.1786**              |
| DinoV2 ViT-B | 0.2002                | **0.1755**              |
| DinoV2 ViT-L | 0.2017                | **0.1863**              |
| DinoV2 ViT-G | 0.2359                | **0.2096**              |

_Table 1: Frechet Dino Distance (FDD) on Scenery Tag Test._

## Download Models

TIPO-200M: https://huggingface.co/KBlueLeaf/TIPO-200M<br>
TIPO-500M: https://huggingface.co/KBlueLeaf/TIPO-500M

## LICENSE

The Model is released under [Kohaku License 1.0](https://kblueleaf.net/documents/kohaku-license/?[Your%20Organization/Name]=KohakuBlueLeaf&[Year]=2024)`<br>`
You can check the above provided URL or check the LICENSE file in this repo.

### Citation

```bibtex
@misc{yeh2024tipo,
  title = {TIPO: Text to Image with text presampling for Prompt Optimization},
  author = {Yeh, Shih-Ying},
  year = {2024},
  month = {10},
  day = {6},
  note = {Technical report available at \url{https://kblueleaf.net/document/TIPO-tech-report.pdf}.
          Model available at \url{https://huggingface.co/KBlueLeaf/TIPO-500M}.
          Source code available at \url{https://github.com/KohakuBlueleaf/KGen}},
}
```
