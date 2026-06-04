import { Meta, StoryObj } from "@storybook/angular";
import { SkeletonComponent } from "./skeleton.component";

const meta: Meta<SkeletonComponent> = {
  title: "Components/Skeleton",
  component: SkeletonComponent,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["text", "rect", "circle"],
    },
    width: { control: "text" },
    height: { control: "text" },
  },
  args: {
    variant: "text",
    width: "100%",
    height: "16px",
  },
};

export default meta;
type Story = StoryObj<SkeletonComponent>;

export const TextLine: Story = {
  args: { variant: "text", width: "240px", height: "14px" },
};

export const Rectangle: Story = {
  args: { variant: "rect", width: "100%", height: "120px" },
};

export const Circle: Story = {
  args: { variant: "circle", height: "48px" },
};

export const CardPlaceholder: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: flex-start; padding: 16px; border: 2px solid #e1e4e8; border-radius: 8px; max-width: 360px;">
        <asdf-skeleton variant="circle" height="40px"></asdf-skeleton>
        <div style="flex: 1; display: flex; flex-direction: column; gap: 8px;">
          <asdf-skeleton variant="text" width="60%" height="14px"></asdf-skeleton>
          <asdf-skeleton variant="text" width="100%" height="12px"></asdf-skeleton>
          <asdf-skeleton variant="text" width="80%" height="12px"></asdf-skeleton>
          <asdf-skeleton variant="rect" width="100%" height="80px"></asdf-skeleton>
        </div>
      </div>
    `,
  }),
};
