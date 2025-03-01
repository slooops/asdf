import { Meta, StoryObj } from "@storybook/angular";
import { FormComponent } from "./form.component";

const meta: Meta<FormComponent> = {
  title: "Components/Form",
  component: FormComponent,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<FormComponent>;

export const Default: Story = {
  args: {},
};
