import { Meta, StoryObj } from "@storybook/angular";
import { DropdownComponent } from "./dropdown.component";

const meta: Meta<DropdownComponent> = {
  title: "Components/Dropdown",
  component: DropdownComponent,
  tags: ["autodocs"],
  argTypes: {
    items: { control: "object" },
    placeholder: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<DropdownComponent>;

export const Default: Story = {
  args: {
    placeholder: "Choose an option",
    items: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ],
  },
};
