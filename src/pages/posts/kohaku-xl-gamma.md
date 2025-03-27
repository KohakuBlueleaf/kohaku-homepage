---
layout: '@/templates/BasePost.astro'
title: Kohaku-XL gamma
description: Updates of Kohaku-series SDXL models
pubDate: 2024-01-19T21:00:00+8
imgSrc: '/assets/images/kohaku-xl-thumbnail.webp'
imgAlt: 'Image post'
---
# Kohaku XL Gamma

A SDXL anime base model aims to create unique artworks.
<div style="display:flex; flex-direction: row; width: 100%;">
  <div><img style="display:block;" src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/afc1dc39-3a1c-4db9-9942-0b2c150124ce/original=true/00946.jpeg"/></div>
  <div><img style="display:block;" src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/20751b43-3d91-4802-b5cb-ce3857d1027a/original=true/00937.jpeg"/></div>
  <div><img style="display:block;" src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/fade32c7-7cb8-4a69-84f3-d3da0f4b319d/original=true/00943.jpeg"/></div>
</div>

---

## Introduction

This model can be seen as a derivative of Animagine XL 3.0 project.
Basically I'm collaborating with Linaqruf for making better Anime base model (and it is obvious that we have different goal/target)
We share our models and technique to improve our models' quality.
And that is also how this model been created.


### Base7

Kohaku-XL base7 is resumed from beta7 and use same dataset that beta series have used. But this time I use my own metadata system to create captions. (Can be taken as advanced version of what linaqruf used, will open source it soon)

The metadata database can be downloaded here:
KBlueLeaf/danbooru2023-sqlite · Datasets at Hugging Face

Trainin details:
LR: 8e-6/2e-6
Scheduler: constant with warmup
Batch size: 128 (batch size 4 * grad acc 16 * gpu count 2) 


### Gamma rev1

Kohaku-XL Gamma rev1 is a merged model which combine the learned diff from anxl3 and kohaku xl base 7. With this forumla:

gamma rev1 = beta7 + 0.8 * (anxl3 - anxl2) + 0.5 * (base7 - beta7)

---

## Usage

This model use my own system for quality tags or something like that. 
So although this model combine the diff weight from anxl3, I will still recommend user to use mine (or both) tagging system.

The format of prompt is as same as anxl3. (You can check the sample images I post)

Rating tags:
* General: safe
* Sensitive: sensitive
* Questionable: nsfw
* Explicit: explicit, nsfw

Quality tags (Better to worse):
* Masterpiece
* best quality
* great quality
* good quality
* normal quality
* low quality
* worst quality


Year tags (New to Old):
* newest
* recent
* mid
* early
* old


You may meet some subtle mosaic-like artifact, that may be caused by high-lr or bad resizing/image encoding.
I will try to fix it in next version. For now, try to use R-ESRGAN anime6b or SCUNet models for fixing it.

---

## Future plan

Since my dataset have some resize/webp artifacts that will harm the models. I will recreate my dataset based on my new system (and opensource it once I done it).

The next plan is to train model on larger (3M-6M) dataset with better configuration (which will require A100s and I plan to spend about 2000-10000 USD on it, if you like my works, consider to sponsor me via buy-me-a-coffee or some BTC-sutff)

