---
layout: '@/templates/BasePost.astro'
title: LyCORIS 2.0.0
description: LyCORIS is now updated to 2.0.0 with lot of new things.
pubDate: 2023-12-24T14:31:43
imgSrc: '/assets/images/banner.webp'
imgAlt: 'Image post'
---
# LyCORIS 2.0.0

We are excited to announce that LyCORIS project has just been updated to version 2.0.0. This update brings a plethora of new features and improvements!

### 🎉HCP-Diffusion supports🎉

LyCORIS is now starting to support training/inference in [HCP-Diffusion](https://github.com/IrisRainbowNeko/HCP-Diffusion)

* Now LyCORIS support LoHa/LoKr/Diag-OFT algorithm in HCP-Diffusion
* Add Pivotal tuning utilities
* Add hcp convert utilities
* Have no plan at this time to support full/lora and train_norms since HCP can do them natively

### 🌟New Implemented Algorithms🌟

* Diag-OFT
  * Ref: [Controlling Text-to-Image Diffusion by Orthogonal Finetuning](https://arxiv.org/abs/2306.07280)
  * [A1111 sd-webui supports](https://github.com/AUTOMATIC1111/stable-diffusion-webui/pull/13692)
  * Also support HCP!

### 🚀New features🚀

* Standalone usage (For any pytorch module):
  * Can wrap any pytorch module which contains Linear/Conv2d/LayerNorm/GroupNorm modules
  * A project which utilize LyCORIS to finetune Phi-1.5: [HakuPhi](https://github.com/KohakuBlueleaf/HakuPhi)
  * minimal example:

```python
from lycoris import create_lycoris, LycorisNetwork

LycorisNetwork.apply_preset(
    {"target_name": [".*attn.*"]}
)
lycoris_net = create_lycoris(
    your_model, 
    1.0, 
    linear_dim=16, 
    linear_alpha=2.0, 
    algo="lokr"
)
lycoris_net.apply_to()

# after apply_to(), your_model() will run with LyCORIS net
lycoris_param = lycoris_net.parameters()
forward_with_lyco = your_model(x)
```

* Merge scripts now support SDXL
* Extract locon script now support SDXL

### Fixed Bugs

* Dropout have inversed rate. (dropout=a will performed as dropout=(1-a))
* appy_max_norms will have divided by zero error
* cannot resume correctly
