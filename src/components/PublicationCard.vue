<script setup>
/**
 * @typedef {Object} Author
 * @property {string} name - Author name
 * @property {boolean} [highlight] - Whether to highlight this author
 *
 * @typedef {Object} Publication
 * @property {string} title - Publication title
 * @property {Array<Author|string>} authors - List of authors
 * @property {string} venue - Publication venue (e.g., Arxiv, ICLR)
 * @property {string|number} year - Publication year
 * @property {string} link - Link to publication
 */

const props = defineProps({
  publication: {
    type: Object,
    required: true,
  },
});

/**
 * Get venue badge color class
 * @param {string} venue
 * @returns {string}
 */
const getVenueColor = (venue) => {
  const lowerVenue = venue.toLowerCase();
  if (lowerVenue.includes("arxiv")) {
    return "bg-red-400/20 text-red-400";
  }
  if (lowerVenue.includes("iclr")) {
    return "bg-emerald-400/20 text-emerald-400";
  }
  return "bg-slate-400/20 text-slate-400";
};

const highlightedAuthor = "Shin-Ying Yeh";

/**
 * Check if author should be highlighted
 * @param {Author|string} author
 * @returns {{text: string, isHighlighted: boolean}}
 */
const formatAuthor = (author) => {
  const name = typeof author === 'string' ? author : author.name;
  const isHighlighted = typeof author === 'object'
    ? author.highlight
    : name.includes(highlightedAuthor);
  return { text: name, isHighlighted };
};
</script>

<template>
  <div class="bg-slate-800 p-4 rounded-lg">
    <a :href="publication.link" class="group block">
      <h3 class="text-xl font-semibold group-hover:text-cyan-400 transition-colors">
        {{ publication.title }}
      </h3>
    </a>

    <div class="mt-2 flex flex-wrap items-center gap-2">
      <span
        :class="[
          'px-2 py-0.5 rounded text-xs font-medium',
          getVenueColor(publication.venue),
        ]"
      >
        {{ publication.venue }}
      </span>
      <span class="text-sm text-gray-500">{{ publication.year }}</span>
    </div>

    <div class="mt-3 text-sm text-gray-400">
      <template v-for="(author, index) in publication.authors" :key="formatAuthor(author).text">
        <span
          :class="{
            'text-yellow-400 font-medium': formatAuthor(author).isHighlighted,
          }"
        >
          {{ formatAuthor(author).text }}
        </span>
        <span v-if="index < publication.authors.length - 1">, </span>
      </template>
    </div>
  </div>
</template>
