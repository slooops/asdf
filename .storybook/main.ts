import type { StorybookConfig } from "@storybook/angular";
const isProduction = process.env.NODE_ENV === "production";

const config: StorybookConfig = {
  // Updated to match your file structure
  stories: ["../src/stories/**/*.stories.ts"],

  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],

  framework: {
    name: "@storybook/angular",
    options: {},
  },

  staticDirs: ["../public"],

  // Keep local Storybook working
  managerHead: (head) =>
    isProduction
      ? `
        ${head}
        <base href="/asdf/">
      `
      : head,

  docs: {
    autodocs: true
  }
};
export default config;
