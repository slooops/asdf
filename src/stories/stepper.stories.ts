import { Meta, StoryObj } from "@storybook/angular";
import { StepperComponent } from "./stepper.component";

const meta: Meta<StepperComponent> = {
  title: "Deprecated/Stepper",
  component: StepperComponent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "**⚠️ DEPRECATED** — This component is deprecated and will be removed in a future release. Do not use in new code.",
      },
    },
  },
  argTypes: {
    steps: { control: "object" },
    activeStep: { control: "number" },
  },
  args: {
    steps: [
      { label: "1. Payload Inbound Error", subCaption: "Details: 5" },
      { label: "2. Bill Ahead Of TSV", subCaption: "Details: 10" },
      { label: "3. Accrual Process", subCaption: "Details: 8" },
      { label: "4. Account Distributions", subCaption: "Details: 7" },
      { label: "5. Account Summarization", subCaption: "Details: 6" },
      { label: "6. Downstream Publish", subCaption: "Details: 3" },
    ],
    activeStep: 2, // Highlight the third step
  },
};

export default meta;

type Story = StoryObj<StepperComponent>;

export const Default: Story = {
  args: {
    steps: [
      { label: "1. Step One", subCaption: "Details: N/A" },
      { label: "2. Step Two", subCaption: "Details: N/A" },
      { label: "3. Step Three", subCaption: "Details: N/A" },
    ],
    activeStep: 0,
  },
};

export const HighlightedStep: Story = {
  args: {
    steps: [
      { label: "1. Step One", subCaption: "Details: 4" },
      { label: "2. Step Two", subCaption: "Details: 8" },
      { label: "3. Step Three", subCaption: "Details: 12" },
    ],
    activeStep: 1, // Highlight the second step
  },
};

export const FullFlow: Story = {
  args: {
    steps: [
      { label: "1. Payload Inbound", subCaption: "Details: 5" },
      { label: "2. Billing", subCaption: "Details: 10" },
      { label: "3. Processing", subCaption: "Details: 8" },
      { label: "4. Distributions", subCaption: "Details: 7" },
      { label: "5. Summarization", subCaption: "Details: 6" },
    ],
    activeStep: 3, // Highlight the fourth step
  },
};
