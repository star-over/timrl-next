module.exports = {

  stories: [
    '../stories/**/*.stories.mdx',
    '../(blocks|components)/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  webpackFinal: config => {
    // Default rule for images /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
    const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      loader: require.resolve('@svgr/webpack'),
    });

    return config;
  },
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
