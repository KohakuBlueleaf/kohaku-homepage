<template>
  <footer class="bg-slate-900 border-t border-slate-800 mt-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex flex-col items-center gap-4 text-center">
        <!-- Copyright -->
        <p class="text-slate-300 text-sm">
          Copyright {{ currentYear }} by Kohaku BlueLeaf
        </p>

        <!-- License -->
        <p class="text-slate-400 text-sm">
          All media on this site, including text, images, and videos, is licensed under
          <a
            href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-cyan-400 hover:text-cyan-300 transition-colors underline"
          >
            CC BY-NC-ND 4.0
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

/**
 * Current year for copyright
 */
const currentYear = computed(() => new Date().getFullYear());
</script>
