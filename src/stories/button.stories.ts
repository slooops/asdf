import type { Meta, StoryObj } from "@storybook/angular";
import { fn } from "@storybook/test";

import { ButtonComponent } from "./button.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
  title: "Components/Button",
  component: ButtonComponent,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Tertiary: Story = {
  args: {
    label: "Tertiary Button",
    primary: false,
    tertiary: true, // Add this to render as tertiary
    size: "medium",
  },
};

export const Danger: Story = {
  args: {
    label: "Danger Button",
    danger: true, // Add this to render as danger
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Button",
    disabled: true, // Add this to render as disabled
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
