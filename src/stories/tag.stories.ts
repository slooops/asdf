import { Meta, StoryObj } from "@storybook/angular";
import { TagComponent } from "./tag.component";

const meta: Meta<TagComponent> = {
  title: "Components/Tag",
  component: TagComponent,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    color: { control: "color" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    removable: { control: "boolean" },
  },
  args: {
    label: "Tag Label",
    color: "#E1E4E8",
    size: "medium",
    removable: false,
  },
};

export default meta;
type Story = StoryObj<TagComponent>;

export const Default: Story = {};

export const Small: Story = {
  args: { size: "small" },
};

export const Large: Story = {
  args: { size: "large" },
};

export const CustomColor: Story = {
  args: { color: "#e84b28" }, // Example custom color (reddish)
};

export const Removable: Story = {
  args: { removable: true },
};
