module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/css/styles.css": "styles.css" });
  eleventyConfig.addPassthroughCopy({ "src/img/": "/" });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      output: "_site"
    },
    passthroughFileCopy: true
  };
};
