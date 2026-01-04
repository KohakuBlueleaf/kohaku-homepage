---
layout: "@/layouts/BasePost.astro"
title: HDM之路：小，到大，到小
description: Text-to-Image model pretrained at home
pubDate: 2025-08-15T11:00:00+8
imgSrc: "/assets/images/HDM-banner.jpeg"
imgAlt: "Image post"
---

距離我上次發blog也已經過了將近一年，剛好最近又完成了一個大專案的階段性成果。也是時候來聊一下最近的事情，以及這個專案了。

## Home Diffusion Model

　　HDM：Home Diffusion Model。顧名思義，HDM是一個在家練出來的Diffusion Model。簡單來講，我用家裡的四張RTX5090從頭練了一個t2i model。而效果正如上方的gallery所表現的那樣，其實性能並不差。而這個模型只有340M的大小(Diffusion部分)。

　　講到這裡相信各位讀者已經想問那個問題了：「HOW?」。如果各位讀者對於讀一個更技術的文檔或者直接讀源碼有興趣，可以直接移駕到我的GitHub/HuggingFace倉庫：
* https://huggingface.co/KBlueLeaf/HDM-xut-340M-anime
* https://github.com/KohakuBlueleaf/HDM

但相信各位讀者不是為了單純聽我解釋一遍怎麼做HDM，以及HDM能做什麼。而我也是這樣打算的，接下來就讓我們來聊一下這整段故事吧。

## 開端

　　2015年，Diffusion Model第一次被提出……，好像有點遠了。2022下半年，Stable Diffusion v1.x以及相應的各種微調(waifudiffusion, novelai等)模型橫空出世，開啟了t2i的第一波熱潮。儘管我在此之前也對Generative Model很感興趣，也嘗試過自行訓練諸如GAN或VAE之類的生成式模型，但是都沒有什麼好結果。而在看到NovelAI與Stable Diffusion之後我拜讀了LDM與DDPM的論文，而讀完這兩篇論文之後我只有一個感想：「這看起來比GAN好練太多了吧」。而我的感覺被證明是對的，僅僅花了我數個小時我就成功實現了我的第一個，能生成能看結果的Generative Model。而它是一個訓練在torchvision內建的car資料集的uncond gen:
![1755492297869](/assets/posts/HDM/_1755492297869.png)

　　所謂萬事起頭難，有了這樣一個簡單的成功經驗反而燃起了我的信心，認為我總有一天能訓練出我自己的文生圖模型。不過在真的嘗試之前我也是循序漸進的復現了不少東西，從CelebA到LSUN系列(church/bedroom等)，再到imagenet-1k的class cond generation。儘管這幾個項目都相當成功，但是到了Text-to-Image的時候難度卻提升了不只一個等級。於是我一邊研究著現有文生圖模型的微調（這時我創造出了LyCORIS專案），一邊嘗試以更加侷限但接近文生圖的配置來訓練生圖模型。

這個截圖應該是我第一次訓練「文生圖」模型，或者說：「標籤生圖」模型：
![1755492918868](/assets/posts/HDM/1755492918868.png)
這個模型的訓練是以Danbooru Tag為輸入來進行訓練的，我將每個tag打上編號，將tag序列當成編號序列送入Embedding層來當作生成模型的「條件」使用。生成出這些圖的模型花了36 RTX4090 hour來訓練。其實能有這樣的效果在當時已經算是相當不錯了。畢竟我當時使用的是UNet with Transformer (與SD的概念一致)來進行訓練。

## 停滯
　　而到了後來，隨著SDXL的發布以及更多模型的出現，我漸漸的開始專注在模型的微調以及工具的製作上。在這期間除了利用LyCORIS訓練出Kohaku-XL系列模型之外我也製作了TIPO系列提示詞模型。不可否認的，我在「依靠自己訓練模型」這件事情上已經沒有了之前的那種衝勁。但我也並沒有放棄，在Kohaku-XL與TIPO上面折騰了一年多之後，我重新開始嘗試自行訓練T2I。這時候已經是2024年8月了，許多模型架構與訓練方法、技巧都有所改變。我也開始嘗試重新設計架構。原先我使用的還是UNet為主的架構，但是使用了更新後的Text Encoder (例如不使用CLIP，以mT5/T5為主等)，儘管取得了一定的進展，但還是很難說效果有多好。
![1755512697925](/src/pages/post/assets/posts/HDM-zh-tw/1755512697925.png)
這九個sample來自一個500M大小的UNet，配合由CLIP與mT5組合而成的文本編碼器。雖然以訓練量以及推理的效率來說可以說是相當不錯，但是繼續訓練也很難獲得顯著的提升，這讓我再次擱置了這個項目。


