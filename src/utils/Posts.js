/**
 * Sort posts by date in descending order
 * @param {Array<{frontmatter: {pubDate: string}}>} posts - Array of posts
 * @returns {Array} Sorted posts
 */
export const sortByDate = (posts) => {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf()
  );
};
