<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import GalleryImage from './GalleryImage.vue'

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => []
  }
})

const selectedIndex = ref(null)

const openLightbox = (index) => {
  selectedIndex.value = index
}

const closeLightbox = () => {
  selectedIndex.value = null
}

const prevImage = () => {
  if (selectedIndex.value === null) return
  selectedIndex.value = selectedIndex.value > 0
    ? selectedIndex.value - 1
    : props.images.length - 1
}

const nextImage = () => {
  if (selectedIndex.value === null) return
  selectedIndex.value = selectedIndex.value < props.images.length - 1
    ? selectedIndex.value + 1
    : 0
}

const onKeydown = (e) => {
  if (selectedIndex.value === null) return

  switch (e.key) {
    case 'Escape':
      closeLightbox()
      break
    case 'ArrowLeft':
      prevImage()
      break
    case 'ArrowRight':
      nextImage()
      break
  }
}

const handleOverlayClick = (e) => {
  if (e.target === e.currentTarget) {
    closeLightbox()
  }
}

watch(selectedIndex, (newVal) => {
  if (newVal !== null) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
    <GalleryImage
      v-for="(image, index) in images"
      :key="index"
      :src="image.src"
      :alt="image.alt"
      @select="openLightbox(index)"
    />
  </div>

  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="selectedIndex !== null"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
        @click="handleOverlayClick"
      >
        <!-- Close button -->
        <button
          class="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          @click="closeLightbox"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Previous button -->
        <button
          class="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          @click.stop="prevImage"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Next button -->
        <button
          class="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          @click.stop="nextImage"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Image container -->
        <div class="max-h-[90vh] max-w-[90vw]" @click.stop>
          <img
            :src="images[selectedIndex]?.src"
            :alt="images[selectedIndex]?.alt"
            class="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>

        <!-- Image counter -->
        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
          {{ selectedIndex + 1 }} / {{ images.length }}
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
