module.exports = {
  framework: {
    name: '@storybook/html-webpack5',
    options: {},
  },
  stories: ['../stories/**/*.stories.@(js|mdx)'],
  addons: ['@storybook/addon-essentials'],
};
