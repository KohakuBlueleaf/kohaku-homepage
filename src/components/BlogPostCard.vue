<script setup>
/**
 * @typedef {Object} Frontmatter
 * @property {string} title - Post title
 * @property {string} [description] - Post description
 * @property {string} pubDate - Publication date
 * @property {string} [imgSrc] - Image source URL
 * @property {string} [imgAlt] - Image alt text
 *
 * @typedef {Object} Post
 * @property {string} url - Post URL
 * @property {Frontmatter} frontmatter - Post frontmatter
 */

defineProps({
  post: {
    type: Object,
    required: true,
  },
});

/**
 * Format date string to locale format
 * @param {string} dateString
 * @returns {string}
 */
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
</script>

<template>
  <a
    :href="post.url"
    class="group block bg-slate-800 rounded-lg overflow-hidden hover:ring-1 hover:ring-slate-600 transition-all duration-200"
  >
    <!-- Thumbnail Image -->
    <div v-if="post.frontmatter.imgSrc" class="aspect-video w-full overflow-hidden">
      <img
        :src="post.frontmatter.imgSrc"
        :alt="post.frontmatter.imgAlt || post.frontmatter.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
    </div>
    <div
      v-else
      class="aspect-video w-full bg-slate-700 flex items-center justify-center"
    >
      <span class="text-slate-500">No Image</span>
    </div>

    <!-- Content -->
    <div class="p-4">
      <h3 class="text-lg font-semibold group-hover:text-cyan-400 transition-colors line-clamp-2">
        {{ post.frontmatter.title }}
      </h3>

      <time class="mt-2 block text-sm text-gray-500">
        {{ formatDate(post.frontmatter.pubDate) }}
      </time>

      <p
        v-if="post.frontmatter.description"
        class="mt-2 text-sm text-gray-400 line-clamp-3"
      >
        {{ post.frontmatter.description }}
      </p>
    </div>
  </a>
</template>
