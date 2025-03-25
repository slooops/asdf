import { Meta, StoryObj } from "@storybook/angular";
import { ToastComponent } from "./toast.component";

const meta: Meta<ToastComponent> = {
  title: "Components/Toast",
  component: ToastComponent,
  tags: ["autodocs"],
  argTypes: {
    message: { control: "text" },
    type: {
      control: { type: "select", options: ["success", "error", "info"] },
    },
    duration: { control: "number" },
    persistent: { control: "boolean" },
    showIcon: { control: "boolean" },
  },
  args: {
    message: "This is a persistent toast message!",
    type: "info",
    duration: 30000,
    persistent: true,
    showIcon: true,
  },
};

export default meta;
type Story = StoryObj<ToastComponent>;

export const Default: Story = {};

export const Success: Story = {
  args: {
    type: "success",
    message: "Success! Your action was successful.",
    showIcon: false,
  },
};

export const Error: Story = {
  args: { type: "error", message: "Error! Something went wrong." },
};

export const AutoDismiss: Story = {
  args: {
    persistent: false,
    message: "This toast will automatically dismiss after 5 seconds.",
    duration: 5000,
  },
};

export const Persistent: Story = {
  args: {
    persistent: true,
    message: "This toast will stay until manually dismissed.",
  },
};
