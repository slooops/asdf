import { Meta, StoryObj } from "@storybook/angular";
import { BadgeComponent } from "./badge.component";

const meta: Meta<BadgeComponent> = {
  title: "Components/Badge",
  component: BadgeComponent,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    type: {
      control: "select",
      options: ["success", "warning", "error", "neutral"],
    },
  },
  args: {
    label: "Badge",
    type: "neutral",
  },
};

export default meta;
type Story = StoryObj<BadgeComponent>;

export const Success: Story = {
  args: { label: "Success", type: "success" },
};

export const Warning: Story = {
  args: { label: "Warning", type: "warning" },
};

export const Error: Story = {
  args: { label: "Error", type: "error" },
};

export const Neutral: Story = {
  args: { label: "Neutral", type: "neutral" },
};
