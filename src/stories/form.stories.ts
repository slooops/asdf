import { Meta, StoryObj } from "@storybook/angular";
import { FormComponent } from "./form.component";

const meta: Meta<FormComponent> = {
  title: "Components/Form",
  component: FormComponent,
  tags: ["autodocs"],
  argTypes: {
    useContainer: {
      control: "boolean",
      description:
        "Toggle between using a container (true) or a card layout (false)",
    },
  },
};

export default meta;

type Story = StoryObj<FormComponent>;

export const Default: Story = {
  args: {
    useContainer: true,
  },
};

export const CardLayout: Story = {
  args: {
    useContainer: false,
  },
};
