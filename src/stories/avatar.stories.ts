import { Meta, StoryObj } from "@storybook/angular";
import { AvatarComponent } from "./avatar.component";

const meta: Meta<AvatarComponent> = {
  title: "Components/Avatar",
  component: AvatarComponent,
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text" },
    src: { control: "text" },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    status: {
      control: "select",
      options: [undefined, "online", "offline", "busy"],
    },
    color: { control: "color" },
  },
  args: {
    name: "Jane Doe",
    size: "medium",
  },
};

export default meta;
type Story = StoryObj<AvatarComponent>;

export const Initials: Story = {
  args: { name: "Jane Doe", size: "medium" },
};

export const WithImage: Story = {
  args: {
    name: "Jane Doe",
    src: "https://i.pravatar.cc/150?u=asdf",
    size: "medium",
  },
};

export const Small: Story = {
  args: { name: "AB", size: "small", color: "#005c85" },
};

export const Large: Story = {
  args: { name: "John Smith", size: "large", color: "#28a745" },
};

export const Online: Story = {
  args: { name: "Jane Doe", size: "medium", status: "online" },
};

export const Busy: Story = {
  args: { name: "Jane Doe", size: "medium", status: "busy", color: "#dc3545" },
};

export const AllSizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; align-items: center; gap: 16px;">
        <asdf-avatar name="SM" size="small" status="online"></asdf-avatar>
        <asdf-avatar name="MD" size="medium" status="busy"></asdf-avatar>
        <asdf-avatar name="LG" size="large" status="offline"></asdf-avatar>
      </div>
    `,
  }),
};
