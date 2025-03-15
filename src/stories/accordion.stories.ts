import { Meta, StoryObj } from "@storybook/angular";
import { AccordionComponent } from "./accordion.component";

const meta: Meta<AccordionComponent> = {
  title: "Components/Accordion",
  component: AccordionComponent,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    open: { control: "boolean" },
  },
  args: {
    title: "Accordion Title",
    open: false,
  },
};

export default meta;
type Story = StoryObj<AccordionComponent>;

export const Default: Story = {};

export const OpenByDefault: Story = {
  args: { open: true },
};
