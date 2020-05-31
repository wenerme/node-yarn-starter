module.exports = {
  stories: ['../stories/**/*.stories.(js|ts|tsx|mdx)', '../src/components/**/*.stories.(ts|tsx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-storysource'
  ]
};
