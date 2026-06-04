import { Meta, StoryObj } from "@storybook/angular";
import { ToggleComponent } from "./toggle.component";

const meta: Meta<ToggleComponent> = {
  title: "Components/Toggle",
  component: ToggleComponent,
  tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    label: { control: "text" },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
  args: {
    checked: false,
    disabled: false,
    label: "Enable notifications",
    size: "medium",
  },
};

export default meta;
type Story = StoryObj<ToggleComponent>;

export const Default: Story = {
  args: { checked: false, label: "Enable notifications" },
};

export const Checked: Story = {
  args: { checked: true, label: "Notifications enabled" },
};

export const Disabled: Story = {
  args: { checked: false, disabled: true, label: "Unavailable" },
};

export const DisabledChecked: Story = {
  args: { checked: true, disabled: true, label: "Locked on" },
};

export const Small: Story = {
  args: { checked: true, size: "small", label: "Compact toggle" },
};

export const Large: Story = {
  args: { checked: false, size: "large", label: "Large toggle" },
};

export const NoLabel: Story = {
  args: { checked: true },
};
