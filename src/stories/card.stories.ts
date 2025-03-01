import { Meta, StoryObj } from "@storybook/angular";
import { CardComponent } from "./card.component";

const meta: Meta<CardComponent> = {
  title: "Components/Card",
  component: CardComponent,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    route: { control: "text" },
    container: { control: "boolean" },
    showTitle: { control: "boolean" }, // New control for showing/hiding title
    showSubtitle: { control: "boolean" }, // New control for showing/hiding subtitle
    showPlaceholder: { control: "boolean" }, // New control for showing/hiding placeholder
  },
  args: {
    title: "Card Title",
    subtitle: "Card Subtitle",
    route: "/",
    showTitle: true,
    showSubtitle: true,
    showPlaceholder: true,
  },
};

export default meta;

type Story = StoryObj<CardComponent>;

export const Default: Story = {
  args: {
    title: "Default Card Title",
    subtitle: "Default Card Subtitle",
    route: "/",
  },
};

// Container Variant with Toggle-able Title/Subtitle
export const Container: Story = {
  args: {
    title: "Container Card Title",
    subtitle: "Container Card Subtitle",
    route: "/",
    container: true,
  },
};
