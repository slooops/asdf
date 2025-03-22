import { Meta, StoryObj } from "@storybook/angular";
import { AccordionComponent } from "./accordion.component";

const meta: Meta<AccordionComponent> = {
  title: "Components/Accordion",
  component: AccordionComponent,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    open: { control: "boolean" },
    borderless: { control: "boolean" },
    showPlaceholder: { control: "boolean" },
  },
  args: {
    title: "Accordion Title",
    open: true,
    borderless: false,
    showPlaceholder: true,
  },
};

export default meta;
type Story = StoryObj<AccordionComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <asdf-accordion
        [title]="title"
        [open]="open"
        [borderless]="borderless"
        [showPlaceholder]="showPlaceholder"
      >
      </asdf-accordion>
    `,
  }),
};

export const Closed: Story = {
  args: {
    open: false,
    showPlaceholder: true,
    title: "This Accordion is Closed",
  },
};

export const NoPlaceholder: Story = {
  args: {
    open: true,
    showPlaceholder: false,
    title: "No Placeholder",
  },
};

export const Borderless: Story = {
  args: {
    open: true,
    borderless: true,
    title: "Be free! Go Borderless!",
  },
};
