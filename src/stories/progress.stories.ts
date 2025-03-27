import type { Meta, StoryObj } from "@storybook/angular";
import { ProgressComponent } from "./progress.component";

const meta: Meta<ProgressComponent> = {
  title: "Components/Progress",
  component: ProgressComponent,
  tags: ["autodocs"],
  argTypes: {
    progress: {
      control: { type: "range", min: 0, max: 100 },
      description: "Progress percentage (0-100)",
    },
    indeterminate: {
      control: "boolean",
      description: "Whether the progress bar is in indeterminate state",
    },
    error: {
      control: "boolean",
      description: "Whether the progress bar is in error state",
    },
    color: {
      control: "color",
      description: "Custom color for the progress bar",
    },
  },
};

export default meta;
type Story = StoryObj<ProgressComponent>;

export const Default: Story = {
  args: {
    progress: 0,
  },
};

export const Complete: Story = {
  args: {
    progress: 100,
  },
};

export const Partial: Story = {
  args: {
    progress: 75,
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
};

export const Error: Story = {
  args: {
    progress: 50,
    error: true,
  },
};

export const CustomColor: Story = {
  args: {
    progress: 75,
    color: "#28a745", // Success green
  },
};
