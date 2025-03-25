import { Meta, StoryObj } from "@storybook/angular";
import { ModalComponent } from "./modal.component";

const meta: Meta<ModalComponent> = {
  title: "Components/Modal",
  component: ModalComponent,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    isOpen: { control: "boolean" },
    showActions: { control: "boolean" },
  },
  args: {
    title: "Example Modal",
    isOpen: true,
    showActions: true,
  },
  parameters: {
    layout: "padded", // This prevents fullscreen but allows space for modal
    options: {
      showPanel: false, // Hides controls panel to maximize space
    },
  },
};

export default meta;
type Story = StoryObj<ModalComponent>;

export const Default: Story = {
  args: {
    title: "Default Modal",
    isOpen: true,
    showActions: true,
  },
};

export const WithoutTitle: Story = {
  args: {
    title: "",
    isOpen: true,
    showActions: true,
  },
};

export const WithoutPlaceholder: Story = {
  args: {
    title: "No Placeholder Modal",
    isOpen: true,
    showActions: true,
    showPlaceholder: false,
  },
};

export const WithoutActions: Story = {
  args: {
    title: "No Actions Modal",
    isOpen: true,
    showActions: false,
  },
};
