import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: "Text",
  },
  render: (args) => <Button {...args} />,
};

export const OutlinedPrimary: Story = {
  args: {
    variant: "outline",
    color: "primary",
    children: "Text",
  },
};
