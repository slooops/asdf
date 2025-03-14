import type { StorybookConfig } from "@storybook/angular";

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
  staticDirs: ["../public"], // Ensure static files load properly
  managerHead: (head) => `
    ${head}
    <base href="/asdf/storybook-static/">
  `,
};
export default config;
