import { Meta, StoryObj } from "@storybook/angular";
import { DividerComponent } from "./divider.component";

const meta: Meta<DividerComponent> = {
  title: "Components/Divider",
  component: DividerComponent,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    label: { control: "text" },
  },
  args: {
    orientation: "horizontal",
  },
};

export default meta;
type Story = StoryObj<DividerComponent>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `
      <div style="max-width: 400px;">
        <p style="font-size: 14px; color: #373c42;">Content above</p>
        <asdf-divider [orientation]="orientation" [label]="label"></asdf-divider>
        <p style="font-size: 14px; color: #373c42;">Content below</p>
      </div>
    `,
  }),
};

export const WithLabel: Story = {
  args: { label: "Or" },
  render: (args) => ({
    props: args,
    template: `
      <div style="max-width: 400px;">
        <p style="font-size: 14px; color: #373c42;">Sign in with email</p>
        <asdf-divider [label]="label"></asdf-divider>
        <p style="font-size: 14px; color: #373c42;">Sign in with SSO</p>
      </div>
    `,
  }),
};

export const SectionLabel: Story = {
  args: { label: "Settings" },
  render: (args) => ({
    props: args,
    template: `
      <div style="max-width: 400px;">
        <asdf-divider [label]="label"></asdf-divider>
        <p style="font-size: 14px; color: #373c42; padding-top: 8px;">Configuration options go here.</p>
      </div>
    `,
  }),
};

export const Vertical: Story = {
  args: { orientation: "vertical" },
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; align-items: center; height: 40px;">
        <span style="font-size: 14px; color: #373c42;">Left</span>
        <asdf-divider orientation="vertical"></asdf-divider>
        <span style="font-size: 14px; color: #373c42;">Right</span>
      </div>
    `,
  }),
};
