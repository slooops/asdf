import { Meta, StoryObj } from "@storybook/angular";
import { TableComponent } from "./table.component";

const meta: Meta<TableComponent> = {
  title: "Components/Table",
  component: TableComponent,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    showTitle: { control: "boolean" },
    showSubtitle: { control: "boolean" },
    headers: { control: "object" },
    data: { control: "object" },
  },
  args: {
    title: "Default Table Title",
    subtitle: "Default Table Subtitle",
    showTitle: true,
    showSubtitle: true,
    headers: ["Name", "Age", "City"],
    data: [
      ["Alice", 30, "New York"],
      ["Bob", 25, "San Francisco"],
      ["Charlie", 35, "Chicago"],
    ],
  },
};

export default meta;

type Story = StoryObj<TableComponent>;

export const Default: Story = {
  args: {
    title: "Default Table",
    subtitle: "Default Data",
    showTitle: true,
    showSubtitle: true,
  },
};

export const WithoutTitle: Story = {
  args: {
    showTitle: false,
    showSubtitle: false,
    headers: ["Product", "Price", "Stock"],
    data: [
      ["Laptop", "$999", "In Stock"],
      ["Phone", "$699", "Out of Stock"],
      ["Tablet", "$499", "Limited Stock"],
    ],
  },
};

export const CustomData: Story = {
  args: {
    title: "Custom Table",
    subtitle: "Custom Data Example",
    headers: ["Country", "Capital", "Population"],
    data: [
      ["USA", "Washington, D.C.", "331 million"],
      ["Canada", "Ottawa", "38 million"],
      ["Germany", "Berlin", "83 million"],
    ],
  },
};
