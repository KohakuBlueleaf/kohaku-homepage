---
layout: '@/templates/BasePost.astro'
title: LyCORIS 3.0.0
description: LyCORIS is now updated to 3.0.0
pubDate: 2024-07-02T00:30:00
imgSrc: '/assets/images/lycoris-3.0.0-thumbnail.webp'
imgAlt: 'Image post'
---
# LyCORIS 3.0.0

🤟We are excited to announce that LyCORIS project has just been updated to version 3.0.0. This update brings a plethora of new features and improvements!

### The reasons of 3.0.0

We reconstruct the whole library with new Class definition and brand new Functional API system.

We also removed lot of redundant/unused modules.

Since the whole library are changed significantly. We decide to call it 3.0.0 as a new major version.

### 🎉Major Changes

* New Module API
* Add Parametrize API
* Add Functional API
  * LoCon/LoHa/LoKr/Diag-OFT/BOFT only.
* Remove optional deps from install_requires
* Remove lot of redundant/deprecated modules
* Better testing
* HunYuan DiT Support ([PR](https://github.com/kohya-ss/sd-scripts/pull/1378) in kohya-ss/sd-scripts)
* Brand new banner with cute dragon girls.

#### 🌟New Features

* LyCORIS now have consistent API for different algorithm like `bypass_forward_diff` or `get_diff_weight` method. Developers of other project can utilize these API to do more tricks or integrate LyCORIS into their framework more easily.
* LyCORIS now have functional API. Developers who prefer functional more than Module things can utilize this feature.
  * Functional API also allow developers who don't want to introduce new dependencies. Just copy-paste the source code and utilizing it. (with Apache-2 License, directly copy-paste is totally allowed)
* Add support for Conv1d and Conv3d module on LoCon/LoHa/LoKr/Full/OFT/BOFT/GLoRA (not All algo in LyCORIS support them, you may receive error when apply unsopported algo), support inherited module (for example: `LoRACompatibleConv` or `LoRACompatibleLinear` from [`huggingface/diffusers`](https://github.com/huggingface/diffusers/blob/main/src/diffusers/models/lora.py))
* HunYuan DiT support.

#### 🤗Improvements, Fixes, Slight Changes

* `apply_max_norm` issue are all fixed.
* DyLoRA, (IA)^3, GLoRA are all rewritten and support Linear/Conv1,2,3d.
* (IA)^3, GLoRA, Diag-OFT, BOFT are supported in `create_lycoris_from_weights`
  * `lycoris.kohya.create_network_from_weights` also support them as well.
* Fix wrong implementation of BOFT.
* `create_lycoris_from_weights` and `create_network_from_weights` now have correct logging infos.
* `get_module` and `make_module` are moved into modules' API.

For more details, please refer to our full change log here:
https://github.com/KohakuBlueleaf/LyCORIS/blob/main/Change.md