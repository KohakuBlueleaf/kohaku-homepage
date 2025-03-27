---
layout: "@/templates/BasePost.astro"
title: Kohaku-XL Epsilon
description: Updates of Kohaku-series SDXL models
pubDate: 2024-04-21T11:00:00+8
imgSrc: "https://huggingface.co/KBlueLeaf/Kohaku-XL-Epsilon/resolve/main/output-samples/01598.webp"
imgAlt: "Image post"
---

# Kohaku XL εpsilon

**_The best example of tuning t2i model at home with consumer-level hardware_**

### join us: https://discord.gg/tPBsKDyRR5

---

<style>
.image-viewer {
  position: relative;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;
}

.image-viewer input[type="radio"] {
  display: none;
}

.image-viewer label {
  padding: 18px;
  background-color: #B398F5;
  background-size: cover;
  background-position: center;
  border: 1px solid #ccc;
  cursor: pointer;
  color: black;
  margin: 9px;
}

.image-viewer label:hover {
  background-color: #4C88F5;
  padding: 21px;
  margin: 6px;
}

.image-viewer input[type="radio"]:checked + label {
  background-color: #6296F5;
  padding: 27px;
  margin: 0px;
}

.image-container {
  position: relative;
  width: 100%;
  height: 50vh;
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: contain;
  opacity: 0;
  transition: opacity 0.5s ease;
}



#image1:checked ~ .image-container img:nth-child(1),
#image2:checked ~ .image-container img:nth-child(2),
#image3:checked ~ .image-container img:nth-child(3),
#image4:checked ~ .image-container img:nth-child(4),
#image5:checked ~ .image-container img:nth-child(5),
#image6:checked ~ .image-container img:nth-child(6),
#image7:checked ~ .image-container img:nth-child(7),
#image8:checked ~ .image-container img:nth-child(8),
#image9:checked ~ .image-container img:nth-child(9),
#imagea:checked ~ .image-container img:nth-child(10),
#imageb:checked ~ .image-container img:nth-child(11),
#imagec:checked ~ .image-container img:nth-child(12) {
  opacity: 1;
}

#image1l{
  background-image: url("https://huggingface.co/KBlueLeaf/Kohaku-XL-Epsilon/resolve/main/output-samples/01594.webp");
}
#image2l{
  background-image: url("https://huggingface.co/KBlueLeaf/Kohaku-XL-Epsilon/resolve/main/output-samples/01586.webp");
}
#image3l{
  background-image: url("https://huggingface.co/KBlueLeaf/Kohaku-XL-Epsilon/resolve/main/output-samples/01598.webp");
}
#image4l{
  background-image: url("https://huggingface.co/KBlueLeaf/Kohaku-XL-Epsilon/resolve/main/output-samples/01557.webp");
}
#image5l{
  background-image: url("https://huggingface.co/KBlueLeaf/Kohaku-XL-Epsilon/resolve/main/output-samples/01573.webp");
}
#image6l{
  background-image: url("https://huggingface.co/KBlueLeaf/Kohaku-XL-Epsilon/resolve/main/output-samples/01574.webp");
}
#image7l{
  background-image: url("https://huggingface.co/KBlueLeaf/Kohaku-XL-Epsilon/resolve/main/output-samples/01551.webp");
}
#image8l{
  background-image: url("https://huggingface.co/KBlueLeaf/Kohaku-XL-Epsilon/resolve/main/output-samples/01554.webp");
}
#image9l{
  background-image: url("https://huggingface.co/KBlueLeaf/Kohaku-XL-Epsilon/resolve/main/output-samples/01580.webp");
}
#imageal{
  background-image: url("https://huggingface.co/KBlueLeaf/Kohaku-XL-Epsilon/resolve/main/output-samples/01581.webp");
}
#imagebl{
  background-image: url("https://huggingface.co/KBlueLeaf/Kohaku-XL-Epsilon/resolve/main/output-samples/13600step/01532.webp");
}
#imagecl{
  background-image: url("https://huggingface.co/KBlueLeaf/Kohaku-XL-Epsilon/resolve/main/output-samples/13600step/01533.webp");
}
</style>

<div class="image-viewer">
  <input type="radio" id="image1" name="image-switcher" checked>
  <label for="image1" id="image1l"></label>
  <input type="radio" id="image2" name="image-switcher">
  <label for="image2" id="image2l"></label>
  <input type="radio" id="image3" name="image-switcher">
  <label for="image3" id="image3l"></label>
  <input type="radio" id="image4" name="image-switcher" checked>
  <label for="image4" id="image4l"></label>
  <input type="radio" id="image5" name="image-switcher">
  <label for="image5" id="image5l"></label>
  <input type="radio" id="image6" name="image-switcher">
  <label for="image6" id="image6l"></label>
  <input type="radio" id="image7" name="image-switcher" checked>
  <label for="image7" id="image7l"></label>
  <input type="radio" id="image8" name="image-switcher">
  <label for="image8" id="image8l"></label>
  <input type="radio" id="image9" name="image-switcher">
  <label for="image9" id="image9l"></label>
  <input type="radio" id="imagea" name="image-switcher" checked>
  <label for="imagea" id="imageal"></label>
  <input type="radio" id="imageb" name="image-switcher">
  <label for="imageb" id="imagebl"></label>
  <input type="radio" id="imagec" name="image-switcher">
  <label for="imagec" id="imagecl"></label>

<div class="image-container">
    <img src="https://huggingface.co/KBlueLeaf/Kohaku-XL-Epsilon/resolve/main/output-samples/01594.webp" alt="Image 1">
    <img src="https://huggingface.co/KBlueLeaf/Kohaku-XL-Epsilon/resolve/main/output-samples/01586.webp" alt="Image 2">
    <img src="https://huggingface.co/KBlueLeaf/Kohaku-XL-Epsilon/resolve/main/output-samples/01598.webp" alt="Image 3">
    <img src="https://huggingface.co/KBlueLeaf/Kohaku-XL-Epsilon/resolve/main/output-samples/01557.webp" alt="Image 4">
    <img src="https://huggingface.co/KBlueLeaf/Kohaku-XL-Epsilon/resolve/main/output-samples/01573.webp" alt="Image 5">
    <img src="https://huggingface.co/KBlueLeaf/Kohaku-XL-Epsilon/resolve/main/output-samples/01574.webp" alt="Image 6">
    <img src="https://huggingface.co/KBlueLeaf/Kohaku-XL-Epsilon/resolve/main/output-samples/01551.webp" alt="Image 7">
    <img src="https://huggingface.co/KBlueLeaf/Kohaku-XL-Epsilon/resolve/main/output-samples/01554.webp" alt="Image 8">
    <img src="https://huggingface.co/KBlueLeaf/Kohaku-XL-Epsilon/resolve/main/output-samples/01580.webp" alt="Image 9">
    <img src="https://huggingface.co/KBlueLeaf/Kohaku-XL-Epsilon/resolve/main/output-samples/01581.webp" alt="Image a">
    <img src="https://huggingface.co/KBlueLeaf/Kohaku-XL-Epsilon/resolve/main/output-samples/13600step/01532.webp" alt="Image b">
    <img src="https://huggingface.co/KBlueLeaf/Kohaku-XL-Epsilon/resolve/main/output-samples/13600step/01533.webp" alt="Image c">
  </div>
</div>

---

## Introduction

Kohaku XL Epsilon, the fifth major iteration in the Kohaku XL series, features a 5.2 million images dataset, LyCORIS fine-tuning[1], trained on comsumer-level hardware, and is fully open-sourced.

## Benchmark

CCIP score on 3600 characters
(0~1, higher is better)
![image](https://hackmd.io/_uploads/SJZY0kFgR.png)
Clearly, Kohaku XL Epsilon is way better than Kohaku XL Delta

## Usage

```
<1girl/1boy/1other/...>,
<character>, <series>, <artists>,

<general tags>,
<quality tags>, <year tags>, <meta tags>, <rating tags>
```

**Kohaku XL Epsilon has mastered more artists' styles then Delta. But it also increases the stablility when combining multiple artist tags together. Users are encouraged to make their own style prompts.**

**Some good style prompts**

```
ask \(askzy\), torino aqua, migolu, (jiu ye sang:1.1), (rumoon:0.9), (mizumi zumi:1.1)
```

```
ciloranko, maccha \(mochancc\), lobelia \(saclia\), migolu,
ask \(askzy\), wanke, (jiu ye sang:1.1), (rumoon:0.9), (mizumi zumi:1.1)
```

```
shiro9jira, ciloranko, ask \(askzy\), (tianliang duohe fangdongye:0.8)
```

```
(azuuru:1.1), (torino aqua:1.2), (azuuru:1.1), kedama milk,
fuzichoco, ask \(askzy\), chen bin, atdan, hito, mignon
```

```
ask \(askzy\), torino aqua, migolu
```

#### Tags

All the danbooru tags with at least 1000 popularity should work.
All the danbooru tags with at least 100 popularity can possibly work with high emphasis.

Remember to remove all the underscore in tags. (Underscores in short tags are not be removed, which are very likely part of emoji tags.)
Remember to use `xxx\(yyy\)`when tag have bracket and you are using sd-webui.

### Special Tags

- **Quality tag**s: masterpiece, best quality, great quality, good quality, normal quality, low quality, worst quality
- **Rating tags**: safe, sensitive, nsfw, explicit
- **Date tags**: newest, recent, mid, early, old

**Quality Tags**
Quality tags are assigned based on the percentile rankings of the favorite count (fav_count) within each rating category to avoid bias on nsfw content (Animagine XL v3 have met this problem), organized from high to low as follows: **_90th, 75th, 60th, 45th, 30th, and 10th percentiles_**. This creates seven distinct quality levels separated by six thresholds.

I lower the threshold since I found that the average quality of images in Danbooru is higher than I expected.

**Rating tags**

- **General**: safe
- **Sensitive**: sensitive
- **Questionable**: nsfw
- **Explicit**: nsfw, explicit

Note: During training, content tagged as "explicit" is also considered under "nsfw" to ensure a comprehensive understanding.

**Date tags**
Date tags are based on the upload dates of the images, as the metadata does not include the actual creation dates.
The periods are categorized as follows:

- 2005~2010: old
- 2011~2014: early
- 2015~2017: mid
- 2018~2020: recent
- 2021~2024: newest

### Resolution

This model is trained for resolutions from ARB 1024x1024 with minimum resolution 256 and maximum resolution 4096. This means you can use the standard SDXL resolution. However, opting for a slightly higher resolution than 1024x1024 is recommended. Applying a hires-fix is also suggested for better results.

For more information, please check out the sample images provided.

## How This Model Came to Be

### Why Epsilon

Same as Delta, just a test for new dataset and it is good.
The outputs are also very different (compare to Delta).

### Dataset

The dataset for training this model was sourced from [HakuBooru](https://github.com/KohakuBlueleaf/HakuBooru), comprising 5.2 million images selected from the [danbooru2023](https://huggingface.co/datasets/KBlueLeaf/danbooru2023-webp-4Mpixel) dataset.[2][3]

A selection process was employed to choose **_1 million posts from IDs 0 to 2,000,000_**, another **_2 millions from IDs 2,000,000 to 4,999,999_**, and **_all posts after ID 5,000,000_**, totaling 5.35 million posts. After filtering out deleted posts, gold account posts and those without images (which could be GIFs or MP4s), the final dataset comprised 5.2 million images.

The selection was essentially random, but a fixed seed was utilized to ensure reproducibility.

**Further Process**

- **Shuffle tags**: The order of general tags was shuffled in each step.
- **Tag dropout**: Randomly, **_15%_** of general tags were dropped in each step.

### Training

The training of Kohaku XL Epsilon was facilitated by the [LyCORIS](https://github.com/KohakuBlueleaf/LyCORIS) project and the trainer from [kohya-ss/sd-scripts](https://github.com/kohya-ss/sd-scripts). [1][4]

**Algorithm: LoKr**[5]
The model was trained using the LoKr algorithm with full matrix triggered and a factor of 2~8 for different modules. The aim was to demonstrate the applicability of LoRA/LyCORIS in training base models.

The original LoKr file size is under 800MB, and the TE was not frozen. The original LoKr file also be provided as "delta-lokr" version.

For detailed settings, refer to the LyCORIS config file from Kohaku XL Delta.

**Other Training Details**

- **Hardware**: Quad RTX 3090s
- **Num Train Images**: 5,210,319
- **Batch Size**: 4
- **Grad Accumulation Step**: 16
- **Equivalent Batch Size**: 256
- **Total Epoch**: 1
- **Total Steps**: 20354
- **Optimizer**: Lion8bit
  - **Learning Rate**: 2e-5 for UNet / 5e-6 for TE
  - **LR Scheduler**: Constant (with warmup)
  - **Warmup Steps**: 1000
  - **Weight Decay**: 0.1
  - **Betas**: 0.9, 0.95
- **Min SNR Gamma**: 5
- **Noise Offset**: 0.0357
- **Resolution**: 1024x1024
- **Min Bucket Resolution**: 256
- **Max Bucket Resolution**: 4096
- **Mixed Precision**: FP16

**Warning**: Versions 0.36.0~0.41.0 of bitsandbytes have significant [bugs](https://github.com/TimDettmers/bitsandbytes/issues/659) in the 8bit optimizer that could compromise training, so updating is essential.[6]

**Training Cost**
Utilizing DDP with four RTX 3090s, completing 1 epoch across the 5.2 million image dataset took approximately 12 to 13 days. Each step for an equivalent batch size of 256 took about 49 to 50 seconds to complete.

### Why I publish 13600step intermediate ckpt

The training progress have crashed when between 13600step~15300step. And kohya-ss trainer didn't implement resume+step skip before.

Although Kohya and I figured out how to do it correctly and did some sanity check on it. I still cannot fully ensure the final result is correct. So I publish the final intermedate ckpt so if anyone want to reproduce the training. They have chance to figure out the problem of final result.

## What's Next

I am focusing on making new dataset (targeting 10M~15M images), and wait for SD3 to see if it is worth trying.

I may also do some small FT on Epsilon and publish them as rev2/3/4... but dataset still my main focus now.

## Special Thanks

AngelBottomless & Nyanko7: danbooru2023 dataset[3]
Kohya-ss: Trainer[4]

---

**_AI art should be looked like AI, not like humans._**

---

_(Some fun fact: this slogan come from my personal homepage. Lot of ppl like this one and put it in their model page.)_

## Reference & Resource

### Reference

[1] **SHIH-YING YEH**, Yu-Guan Hsieh, Zhidong Gao, Bernard B W Yang, Giyeong Oh, & Yanmin Gong (2024). Navigating Text-To-Image Customization: From LyCORIS Fine-Tuning to Model Evaluation. In The Twelfth International Conference on Learning Representations.

[2] HakuBooru - text-image dataset maker for booru style image platform. https://github.com/KohakuBlueleaf/HakuBooru

[3] Danbooru2023: A Large-Scale Crowdsourced and Tagged Anime Illustration Dataset. https://huggingface.co/datasets/nyanko7/danbooru2023

[4] kohya-ss/sd-scripts. https://github.com/kohya-ss/sd-scripts

[5] LyCORIS - Lora beYond Conventional methods, Other Rank adaptation Implementations for Stable diffusion. https://github.com/KohakuBlueleaf/LyCORIS/blob/main/docs/Algo-Details.md#lokr

[6] TimDettmers/bitsandbytes - issue 659/152/227/262 - Wrong indented lines cause bugs for a long time. https://github.com/TimDettmers/bitsandbytes/issues/659

### Resource

- Kohaku XL beta. https://civitai.com/models/162577/kohaku-xl-beta
- Kohaku XL gamma. https://civitai.com/models/270291/kohaku-xl-gamma
- Kohaku XL delta. https://civitai.com/models/332076/kohaku-xl-delta

## License

**This model is licensed under "Fair-AI public license 1.0-SD", please refer to the original License for more information: https://freedevproject.org/faipl-1.0-sd/**
