import type { StorybookConfig } from "@storybook/angular";
const isProduction = process.env.NODE_ENV === "production";

const config: StorybookConfig = {
  stories: ["../src/stories/**/*.stories.ts"], // Updated to match your file structure
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

  managerHead: (head) =>
    isProduction
      ? `
        ${head}
        <base href="/asdf/storybook-static/">
      `
      : head, // Keep local Storybook working
};
export default config;
