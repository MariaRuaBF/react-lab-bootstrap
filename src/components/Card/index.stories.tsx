import type { Meta, StoryObj } from "@storybook/react";

import { Card } from ".";

const meta = {
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    title: "",
    subtitle: "",
    children: "Text",
    variant: "basic",
    color: "primary",
  },
  render: (args) => <Card {...args} />,
};