<template>
  <nav class="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between py-4">
        <!-- Logo / Brand -->
        <a href="/" class="flex items-center gap-3 group">
          <img
            src="/assets/images/kohaku-badge.webp"
            alt="Kohaku"
            class="w-10 h-10 rounded-full object-cover"
          />
          <span class="text-lg font-bold text-slate-200 group-hover:text-white transition-colors">
            <span class="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Kohaku</span>
            is a cute dragon girl.
          </span>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-6">
          <a
            v-for="link in navigation"
            :key="link.href"
            :href="link.href"
            class="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
            :class="{ 'text-cyan-400': isActivePath(link.href) }"
          >
            {{ link.name }}
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click.stop="toggleMobileMenu"
          class="md:hidden text-slate-300 hover:text-white transition-colors p-2 flex items-center justify-center"
          aria-label="Toggle menu"
          :aria-expanded="mobileMenuOpen"
        >
          <span v-if="!mobileMenuOpen" class="i-carbon-menu text-2xl block"></span>
          <span v-else class="i-carbon-close text-2xl block"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Overlay -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="mobileMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-md border-b border-slate-800 shadow-xl z-40"
      >
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div class="flex flex-col gap-3">
            <a
              v-for="link in navigation"
              :key="link.href"
              :href="link.href"
              class="text-slate-300 hover:text-cyan-400 transition-colors font-medium py-2"
              :class="{ 'text-cyan-400': isActivePath(link.href) }"
              @click="closeMobileMenu"
            >
              {{ link.name }}
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { navigation } from '../config/site.js';

const mobileMenuOpen = ref(false);
const currentPath = ref('');

/**
 * Toggle mobile menu
 */
function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}

/**
 * Close mobile menu
 */
function closeMobileMenu() {
  mobileMenuOpen.value = false;
}

/**
 * Check if a path is the current active path
 * @param {string} path - Path to check
 * @returns {boolean}
 */
function isActivePath(path) {
  if (path === '/') {
    return currentPath.value === '/';
  }
  return currentPath.value.startsWith(path);
}

/**
 * Handle click outside to close mobile menu
 * @param {Event} e - Click event
 */
function handleClickOutside(e) {
  if (mobileMenuOpen.value && !e.target.closest('nav')) {
    closeMobileMenu();
  }
}

onMounted(() => {
  currentPath.value = window.location.pathname;
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>
