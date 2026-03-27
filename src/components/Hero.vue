<script setup>
import { computed } from 'vue'

const props = defineProps({
  heroData: {
    type: Object,
    default: () => ({})
  }
})

const defaultData = {
  name: 'Kohaku BlueLeaf',
  subname: 'Shih-Ying Yeh　葉適穎',
  badgeImage: '/assets/images/kohaku-badge.webp',
  avatarImage: '/assets/images/kohaku-bg-full.webp',
  bio: [
    'CS master\'s student at National Tsing Hua University in Taiwan. Published at ICLR 2024 (LyCORIS) and ICLR 2026 (TIPO).',
    'I research and build AI systems end-to-end — from neural network training and GPU kernels to infrastructure, databases, RAG frameworks, and agent systems.',
    'Leading Kohaku Lab, a virtual open-source research lab. Currently exploring VAE/AE/VQ-VAE architectures for generative modeling, building agent frameworks (KohakuTerrarium), and playing with AI board game engines. Everything we build is 100% open access.'
  ],
  quote: 'AI art should look like AI, not humans.',
  socials: [
    { icon: 'i-carbon-logo-github', url: 'https://github.com/KohakuBlueleaf', label: 'GitHub' },
    { icon: 'i-carbon-email', url: 'mailto:kohaku@kblueleaf.net', label: 'Email' },
    { icon: 'i-carbon-logo-linkedin', url: 'https://www.linkedin.com/in/適穎-葉-80797327b/', label: 'LinkedIn' },
    { icon: 'i-carbon-logo-x', url: 'https://twitter.com/KBlueleaf', label: 'Twitter' },
    { icon: 'i-carbon-video', url: 'https://space.bilibili.com/507303431', label: 'Bilibili' }
  ]
}

const data = computed(() => ({
  ...defaultData,
  ...props.heroData
}))
</script>

<template>
  <section class="w-full py-12 md:py-20">
    <div class="max-w-6xl mx-auto px-4 md:px-8">
      <div class="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        <!-- Left side: Text content -->
        <div class="flex-1 order-2 md:order-1">
          <!-- Badge + Name section -->
          <div class="flex items-center gap-4 mb-4">
            <!-- Badge with blur effect -->
            <div class="relative shrink-0">
              <div
                class="absolute inset-0 rounded-2xl"
                :style="{
                  backgroundImage: `url(${data.badgeImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'blur(15px) contrast(2)'
                }"
              ></div>
              <img
                :src="data.badgeImage"
                alt="Badge"
                class="relative w-32 h-32 rounded-2xl object-cover"
              />
            </div>
            <!-- Name -->
            <div>
              <h1
                class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
              >
                {{ data.name }}
              </h1>
              <p class="text-xl text-gray-400 mt-1">
                {{ data.subname }}
              </p>
            </div>
          </div>

          <!-- Bio paragraphs -->
          <div class="space-y-4 mt-6">
            <p
              v-for="(paragraph, index) in data.bio"
              :key="index"
              class="text-gray-300 leading-relaxed"
            >
              {{ paragraph }}
            </p>
          </div>

          <!-- Quote -->
          <blockquote class="mt-6 text-gray-200 italic font-bold border-l-4 border-purple-500 pl-4">
            "{{ data.quote }}"
          </blockquote>

          <!-- Social icons -->
          <div class="flex gap-4 mt-8">
            <a
              v-for="social in data.socials"
              :key="social.label"
              :href="social.url"
              :aria-label="social.label"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <div :class="[social.icon, 'text-2xl']"></div>
            </a>
          </div>
        </div>

        <!-- Right side: Avatar -->
        <div class="flex-1 order-1 md:order-2 flex justify-center">
          <div class="relative">
            <!-- Blur effect behind avatar -->
            <div
              class="absolute inset-0 rounded-2xl scale-105"
              :style="{
                backgroundImage: `url(${data.avatarImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(15px) contrast(2)'
              }"
            ></div>
            <!-- Avatar image -->
            <img
              :src="data.avatarImage"
              alt="Avatar"
              class="relative rounded-2xl max-w-full w-80 md:w-96 object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
