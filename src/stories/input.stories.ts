import { Meta, StoryObj } from "@storybook/angular";
import { InputComponent } from "./input.component";

const meta: Meta<InputComponent> = {
  title: "Components/Input",
  component: InputComponent,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    type: {
      control: { type: "select", options: ["text", "email", "password"] },
    },
    placeholder: { control: "text" },
    value: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: {
    label: "Example Input",
    type: "text",
    placeholder: "Tell me your secrets...",
    value: "",
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {},
};

export const Email: Story = {
  args: {
    label: "Email Address",
    type: "email",
    placeholder: "Enter your email",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    disabled: true,
    value: "Can't edit this",
  },
};
