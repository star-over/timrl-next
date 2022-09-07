module.exports = {

  stories: [
    '../stories/**/*.stories.mdx',
    '../(blocks|components)/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    'storybook-addon-next',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  staticDirs: ['../public', '../static'],
  framework: "@storybook/react",
  core: {
    "builder": "@storybook/builder-webpack5"
  }
}
