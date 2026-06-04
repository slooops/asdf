import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { TooltipComponent } from "./tooltip.component";
import { ButtonComponent } from "./button.component";

const meta: Meta<TooltipComponent> = {
  title: "Components/Tooltip",
  component: TooltipComponent,
  tags: ["autodocs"],
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent],
    }),
  ],
  argTypes: {
    text: { control: "text" },
    position: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
    },
  },
  args: {
    text: "Tooltip text",
    position: "top",
  },
};

export default meta;
type Story = StoryObj<TooltipComponent>;

export const Top: Story = {
  args: { text: "This is a tooltip", position: "top" },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 60px; display: flex; justify-content: center;">
        <asdf-tooltip [text]="text" [position]="position">
          <asdf-button label="Hover me" [primary]="true"></asdf-button>
        </asdf-tooltip>
      </div>
    `,
  }),
};

export const Bottom: Story = {
  args: { text: "Bottom tooltip", position: "bottom" },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 60px; display: flex; justify-content: center;">
        <asdf-tooltip [text]="text" [position]="position">
          <asdf-button label="Hover me"></asdf-button>
        </asdf-tooltip>
      </div>
    `,
  }),
};

export const Left: Story = {
  args: { text: "Left tooltip", position: "left" },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 60px; display: flex; justify-content: center;">
        <asdf-tooltip [text]="text" [position]="position">
          <asdf-button label="Hover me" [primary]="true"></asdf-button>
        </asdf-tooltip>
      </div>
    `,
  }),
};

export const Right: Story = {
  args: { text: "Right tooltip", position: "right" },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 60px; display: flex; justify-content: center;">
        <asdf-tooltip [text]="text" [position]="position">
          <asdf-button label="Hover me"></asdf-button>
        </asdf-tooltip>
      </div>
    `,
  }),
};
