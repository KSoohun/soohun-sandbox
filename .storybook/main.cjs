module.exports = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: ['@storybook/addon-essentials'],
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
  },
};
