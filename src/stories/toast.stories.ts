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
  },
  args: {
    message: "This is a toast message!",
    type: "info",
    duration: 30000,
  },
};

export default meta;
type Story = StoryObj<ToastComponent>;

export const Default: Story = {};

export const Success: Story = {
  args: { type: "success", message: "Success! Your action was successful." },
};

export const Error: Story = {
  args: { type: "error", message: "Error! Something went wrong." },
};

export const LongerDuration: Story = {
  args: { duration: 5000 },
};
