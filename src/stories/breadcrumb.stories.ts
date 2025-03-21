import { Meta, StoryObj } from "@storybook/angular";
import { BreadcrumbComponent } from "./breadcrumb.component";

const meta: Meta<BreadcrumbComponent> = {
  title: "Components/Breadcrumb",
  component: BreadcrumbComponent,
  tags: ["autodocs"],
  argTypes: {
    breadcrumbs: { control: "object" },
  },
};

export default meta;

type Story = StoryObj<BreadcrumbComponent>;

export const Default: Story = {
  args: {
    breadcrumbs: [
      { label: "Home", link: "/" },
      { label: "Library", link: "/library" },
      { label: "Data", link: "/library/data" },
      { label: "Current Page", link: "#" },
    ],
  },
};
