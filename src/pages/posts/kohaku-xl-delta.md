---
layout: '@/templates/BasePost.astro'
title: Kohaku-XL Delta
description: Updates of Kohaku-series SDXL models
pubDate: 2024-03-05T02:00:00+8
imgSrc: 'https://huggingface.co/KBlueLeaf/Kohaku-XL-Delta/resolve/main/sample/01255.png'
imgAlt: 'Image post'
---
# Kohaku XL Δelta

***The best "SDXL anime base model that has been trained by an 'individual'."***

join us: https://discord.gg/tPBsKDyRR5

<style>
  
  .custom-table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    margin-top: 0em;
    border: none;
  }
  .custom-table img{
    margin-top: 0px;
  }
  .custom-table tr{
    border: none !important;
  }
  
  .custom-table td {
    vertical-align: top;
    padding: 0;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.15);
  }

  .custom-image-container {
    position: relative;
    width: 100%;
    margin-bottom: 0em;
    overflow: hidden;
    border-radius: 10px;
    transition: transform .7s;
    /* Smooth transition for the container */
  }

  .custom-image-container:hover {
    transform: scale(1.05);
    /* Scale the container on hover */
  }

  .custom-image-container:hover .custom-image {
    opacity: 0
  }
  .custom-image-container:hover 
  .hover-image {
    opacity: 1;
  }

  .custom-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
    transition: transform .7s, opacity .5s;
    margin-bottom: 0em;
  }

  .hover-image {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity .5s;
  }
  
  .nsfw-filter {
    filter: blur(8px); /* Apply a blur effect */
    transition: filter 0.3s ease; /* Smooth transition for the blur effect */
  }

  .custom-image-container:hover .nsfw-filter {
    filter: none; /* Remove the blur effect on hover */
  }
  
  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1vw;
    font-style: bold;
    text-align: center;
    opacity: 0;
    /* Keep the text fully opaque */
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0) 100%);
    transition: opacity .5s;
  }
  .custom-image-container:hover .overlay {
    opacity: 1;
    /* Make the overlay always visible */
  }
  .overlay-text {
    background: linear-gradient(45deg, #130c28, #ca76e2);
    -webkit-background-clip: text;
    color: transparent;
    /* Fallback for browsers that do not support this effect */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    /* Enhanced text shadow for better legibility */
  
  .overlay-subtext {
    font-size: 0.75em;
    margin-top: 0.5em;
    font-style: italic;
  }
  
  .overlay,
  .overlay-subtext {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
</style>

<table class="custom-table">
  <tr>
    <td style="width: 36.8275862068966%;">
      <div class="custom-image-container">
        <div class="image-wrapper">
          <img class="custom-image" src="https://huggingface.co/KBlueLeaf/Kohaku-XL-Delta/resolve/main/sample/table/th-1.png" alt="sample1">
          <img class="hover-image" src="https://huggingface.co/KBlueLeaf/Kohaku-XL-Delta/resolve/main/sample/table/1.png" alt="sample1">
          <div class="overlay" style="font-size: 1vw; font-style: bold;"> 
            Stream in the forest 
            <div class="overlay-subtext" style="font-size: 0.75em; font-style: italic;">"by KBlueLeaf"</div>
          </div>
        </div>
      </div>
    </td>
    <td style="width: 1.37931034482759%;"></td>
    <td style="width: 61.7931034482759%;">
      <table class="custom-table" style="margin: 0 !important; padding: 0 !important;">
        <tr style="height: 30.8858996897622%;">
          <td>
            <div class="custom-image-container">
              <div class="image-wrapper">
                <img class="custom-image" src="https://huggingface.co/KBlueLeaf/Kohaku-XL-Delta/resolve/main/sample/table/th-2-1.png" alt="sample2">
                <img class="hover-image" src="https://huggingface.co/KBlueLeaf/Kohaku-XL-Delta/resolve/main/sample/table/2-1.png" alt="sample2">
                <div class="overlay" style="font-size: 1vw; font-style: bold;"> 
                  The rise
                  <div class="overlay-subtext" style="font-size: 0.75em; font-style: italic;">"by KBlueLeaf"</div>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr style="height: 3.1023784901758%;"></tr>
        <tr style="height: 66.0117218200621%;">
          <td>
            <table class="custom-table" style="margin: 0 !important; padding: 0 !important;">
              <tr>
                <td style="width: 47.47023828125%">
                  <div class="custom-image-container">
                    <div class="image-wrapper">
                      <img class="custom-image" src="https://huggingface.co/KBlueLeaf/Kohaku-XL-Delta/resolve/main/sample/table/th-2-2-1.png" alt="sample3">
                      <img class="hover-image" src="https://huggingface.co/KBlueLeaf/Kohaku-XL-Delta/resolve/main/sample/table/2-2-1.png" alt="sample3">
                      <div class="overlay" style="font-size: 1vw; font-style: bold;"> 
                        Looking back
                        <div class="overlay-subtext" style="font-size: 0.75em; font-style: italic;">"by KBlueLeaf"</div>
                      </div>
                    </div>
                  </div>
                </td>
                <td style="width: 2.23214285714286%;"></td>
                <td style="width: 50.2976188616071%">
                  <table class="custom-table" style="margin: 0 !important; padding: 0 !important;">
                    <tr style="height: 24.6997434804245%;">
                      <td>
                        <div class="custom-image-container">
                          <div class="image-wrapper">
                            <img class="custom-image" src="https://huggingface.co/KBlueLeaf/Kohaku-XL-Delta/resolve/main/sample/table/th-2-2-2-1.png" alt="sample4">
                            <img class="hover-image" src="https://huggingface.co/KBlueLeaf/Kohaku-XL-Delta/resolve/main/sample/table/2-2-2-1.png" alt="sample4"> 
                            <div class="overlay" style="font-size: 1vw; font-style: bold;"> 
                              Flower
                              <div class="overlay-subtext" style="font-size: 0.75em; font-style: italic;">"by KBlueLeaf"</div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr style="height: 4.69973878068567%;"></tr>
                    <tr style="height: 70.6005177388899%;">
                      <td>
                        <div class="custom-image-container">
                          <div class="image-wrapper">
                            <img class="custom-image" src="https://huggingface.co/KBlueLeaf/Kohaku-XL-Delta/resolve/main/sample/table/th2-2-2-2-2.png" alt="sample5">
                            <img class="hover-image" src="https://huggingface.co/KBlueLeaf/Kohaku-XL-Delta/resolve/main/sample/table/2-2-2-2.png" alt="sample5">
                            <div class="overlay" style="font-size: 1vw; font-style: bold;"> 
                              "The Cat"
                              <div class="overlay-subtext" style="font-size: 0.75em; font-style: italic;">"by KBlueLeaf"</div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>

## Introduction

Kohaku XL Delta, the fourth major iteration in the Kohaku XL series, features a 3.6 million images dataset, LyCORIS fine-tuning[1], trained on comsumer-level hardware, and is fully open-sourced.

## Usage

**the "base" version is "before train" one!!!!**

Here's a simple format to make using this model a breeze:

```
<1girl/1boy/1other/...>, <character>, <series>, <artists>, <special tags>, <general tags>
```

Special tags(quality, rating, and date) actually fall under general tags. But it's a good idea to group all these tags before the general tags.

**While Kohaku XL Delta has mastered few artists' styles with high fidelity. However, users are strongly encouraged to blend multiple artist tags to explore new styles, rather than attempting to replicate the style of any specific artist.**

#### Tags

All the danbooru tags with at least 1000 popularity should work.
All the danbooru tags with at least 100 popularity can possibly work with high emphasis.

Remember to remove all the underscore in tags. (Underscores in short tags are not be removed, which are very likely part of emoji tags.)

### Special Tags

- **Quality tag**s: masterpiece, best quality, great quality, good quality, normal quality, low quality, worst quality
- **Rating tags**: safe, sensitive, nsfw, explicit
- **Date tags**: newest, recent, mid, early, old

**Quality Tags**
Quality tags are assigned based on the percentile rankings of the favorite count (fav_count) within each rating category to avoid bias on nsfw content (Animagine XL v3 have met this problem), organized from high to low as follows: 95th, 85th, 75th, 50th, 25th, and 10th percentiles. This creates seven distinct quality levels separated by six thresholds.

**Rating tags**

* **General**: safe
* **Sensitive**: sensitive
* **Questionable**: nsfw
* **Explicit**: nsfw, explicit

Note: During training, content tagged as "explicit" is also considered under "nsfw" to ensure a comprehensive understanding.

**Date tags**
Date tags are based on the upload dates of the images, as the metadata does not include the actual creation dates.
The periods are categorized as follows:

* 2005~2010: old
* 2011~2014: early
* 2015~2017: mid
* 2018~2020: recent
* 2021~2024: newest

### Emphasis

Given the short training period, some tags might not have been learned well. Through experimentation, increasing the "emphasis weight" to between 1.5 and 2.5 can still yield descent results, especially for character or artist tags.
For sd-webui users, please use version>=1.8.0 and switch the emphasis mode to "No norm" to prevent potential NaN issues.

### Resolution

This model is trained for resolutions from ARB 1024x1024 with minimum resolution 256 and maximum resolution 4096. This means you can use the standard SDXL resolution. However, opting for a slightly higher resolution than 1024x1024 is recommended. Applying a hires-fix is also suggested for better results.

For more information, please check out the metadata of the sample images provided.

## How This Model Came to Be

### Dataset

The dataset for training this model was sourced from [HakuBooru](https://github.com/KohakuBlueleaf/HakuBooru), comprising 3.6 million images selected from the [danbooru2023](https://huggingface.co/datasets/KBlueLeaf/danbooru2023-webp-4Mpixel) dataset.[2][3]

A selection process was employed to choose 1 million posts from IDs 0 to 2,999,999, another million from IDs 3,000,000 to 4,999,999, and all posts after ID 5,000,000, totaling 4.1 million posts. After filtering out deleted posts, gold account posts and those without images (which could be GIFs or MP4s), the final dataset comprised 3.6 million images.

The selection was essentially random, but a fixed seed was utilized to ensure reproducibility.

**Further Process**

* **Shuffle tags**: The order of general tags was shuffled in each step.
* **Tag dropout**: Randomly, 10% of general tags were dropped in each step.

### Training

The training of Kohaku XL Delta was facilitated by the [LyCORIS](https://github.com/KohakuBlueleaf/LyCORIS) project and the trainer from [kohya-ss/sd-scripts](https://github.com/kohya-ss/sd-scripts). [1][4]

**Base Model Refinement**
Our investigation indicated that training the "token_embedding" and "position_embedding" within CLIP, or the "positional_embedding" in openCLIP, may not be beneficial for fine-tuning on a small to medium scale, particularly with smaller batch sizes.[5][6]

Consequently, we reverted to the original token and position embeddings from TE1 and TE2 models. Following this, we combined the restored gamma rev2  and beta7 models through a weighted sum (weight=0.5), forming the foundational model for Kohaku XL Delta.

This foundational model, referred to as "delta-pre2" or "delta base," serves as a preliminary version without further training, positioning its capabilities between Kohaku XL gamma rev2 and Kohaku XL beta7.

**Algorithm: LoKr**[7]
The model was trained using the LoKr algorithm with full matrix triggered and a factor of 2~8 for different modules. The aim was to demonstrate the applicability of LoRA/LyCORIS in training base models.

The original LoKr file size is under 800MB, and the TE was not frozen. The original LoKr file also be provided as "delta-lokr" version.

For detailed settings, refer to the LyCORIS config file.

**Other Training Details**

- **Hardware**: Dual RTX 3090s
- **Num Train Images**: 3,665,398
- **Batch Size**: 4
- **Grad Accumulation Step**: 16
- **Equivalent Batch Size**: 128
- **Total Epoch**: 1
- **Total Steps**: 28638
- **Optimizer**: Lion8bit
  - **Learning Rate**: 4e-5 for UNet / 1e-5 for TE
  - **LR Scheduler**: Constant
  - **Warmup Steps**: 100
  - **Weight Decay**: 0.1
  - **Betas**: 0.9, 0.95
- **Min SNR Gamma**: 5
- **Resolution**: 1024x1024
- **Min Bucket Resolution**: 256
- **Max Bucket Resolution**: 4096
- **Mixed Precision**: FP16

**Warning**: Versions 0.36.0~0.41.0 of bitsandbytes have significant [bugs](https://github.com/TimDettmers/bitsandbytes/issues/659) in the 8bit optimizer that could compromise training, so updating is essential.[8]

**Training Cost**
Utilizing DDP with two RTX 3090s, completing 1 epoch across the 3.6 million image dataset took approximately 17 to 18 days. Each step for an equivalent batch size of 128 took about 51 to 51.5 seconds to complete.

### What's Next

Delta is likely the last big update for Kohaku XL, but that doesn't mean I'm done tinkering with it. And I won't ensure this is actually the last one.

I'm thinking about running it through a few more epochs or maybe beefing up the dataset to 5 million images soon. Plus, I'm considering trying out DoKr with a bit of a bigger setup for some experimental tweaks.

(Funny thing, Delta started off as an experiment too, but turned out so well it became a main release!)

## Special Thanks

AngelBottomless & Nyanko7: danbooru2023 dataset[3]
Kohya-ss: Trainer[4]
ChatGPT/GPT4: Refine this model card

---

***AI art should be looked like AI, not like humans.***

---

## Reference & Resource

### Reference

[1] **Shih-Ying Yeh**, Yu-Guan Hsieh, Zhidong Gao, Bernard B W Yang, Giyeong Oh, & Yanmin Gong (2024). Navigating Text-To-Image Customization: From LyCORIS Fine-Tuning to Model Evaluation. In The Twelfth International Conference on Learning Representations.

[2] HakuBooru - text-image dataset maker for booru style image platform. https://github.com/KohakuBlueleaf/HakuBooru

[3] Danbooru2023: A Large-Scale Crowdsourced and Tagged Anime Illustration Dataset.
https://huggingface.co/datasets/nyanko7/danbooru2023

[4] kohya-ss/sd-scripts.
https://github.com/kohya-ss/sd-scripts

[5] Transformers: State-of-the-art Machine Learning for Pytorch, TensorFlow, and JAX.
https://github.com/huggingface/transformers/blob/b647acdb53d251cec126b79e505bac11821d7c93/src/transformers/models/clip/modeling_clip.py#L204-L205

[6] OpenCLIP - An open source implementation of CLIP.
https://github.com/mlfoundations/open_clip/blob/73fa7f03a33da53653f61841eb6d69aef161e521/src/open_clip/transformer.py#L598-L604

[7] LyCORIS - Lora beYond Conventional methods, Other Rank adaptation Implementations for Stable diffusion.
https://github.com/KohakuBlueleaf/LyCORIS/blob/main/docs/Algo-Details.md#lokr

[8] TimDettmers/bitsandbytes - issue 659/152/227/262 - Wrong indented lines cause bugs for a long time.
https://github.com/TimDettmers/bitsandbytes/issues/659

### Resource

* Kohaku XL beta. https://civitai.com/models/162577/kohaku-xl-beta
* Kohaku XL gamma. https://civitai.com/models/270291/kohaku-xl-gamma

## Appendix

Sample images will be put in here later.
You can check the sample folder at first.
