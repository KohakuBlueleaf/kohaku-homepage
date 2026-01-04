// Utility functions for Kohaku Homepage

/**
 * Format a date string to locale format
 * @param {string|Date} date - Date to format
 * @param {object} options - Intl.DateTimeFormat options
 * @returns {string} Formatted date string
 */
export function formatDate(date, options = {}) {
  const defaultOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('en-US', {
    ...defaultOptions,
    ...options,
  });
}

/**
 * Sort posts by date in descending order
 * @param {Array} posts - Array of posts with frontmatter.pubDate
 * @returns {Array} Sorted posts
 */
export function sortByDate(posts) {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf()
  );
}

/**
 * Estimate reading time for content
 * @param {string} content - Text content
 * @param {number} wordsPerMinute - Reading speed (default: 200)
 * @returns {number} Estimated minutes
 */
export function estimateReadingTime(content, wordsPerMinute = 200) {
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Paginate an array
 * @param {Array} items - Items to paginate
 * @param {number} page - Current page (1-indexed)
 * @param {number} perPage - Items per page
 * @returns {object} Pagination result
 */
export function paginate(items, page = 1, perPage = 10) {
  const totalPages = Math.ceil(items.length / perPage);
  const currentPage = Math.max(1, Math.min(page, totalPages));
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;

  return {
    data: items.slice(start, end),
    currentPage,
    totalPages,
    totalItems: items.length,
    hasNext: currentPage < totalPages,
    hasPrev: currentPage > 1,
  };
}

/**
 * Truncate text to a maximum length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @param {string} suffix - Suffix to add if truncated
 * @returns {string} Truncated text
 */
export function truncate(text, maxLength = 150, suffix = '...') {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - suffix.length).trim() + suffix;
}

/**
 * Debounce a function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in ms
 * @returns {Function} Debounced function
 */
export function debounce(func, wait = 300) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Group items by a key
 * @param {Array} items - Items to group
 * @param {string|Function} key - Key to group by
 * @returns {object} Grouped items
 */
export function groupBy(items, key) {
  return items.reduce((result, item) => {
    const groupKey = typeof key === 'function' ? key(item) : item[key];
    (result[groupKey] = result[groupKey] || []).push(item);
    return result;
  }, {});
}

export default {
  formatDate,
  sortByDate,
  estimateReadingTime,
  paginate,
  truncate,
  debounce,
  groupBy,
};
