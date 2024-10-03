/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx", 
    "../src/**/*.mdx", 
    "../src/**/**/*.stories.@(js|jsx|mjs)"],

  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    '@storybook/addon-themes'
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  core: {
    builder: '@storybook/builder-vite',
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript"
  },
};
export default config;
