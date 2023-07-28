import type { Meta, StoryObj } from "@storybook/react";

import { CardHeader } from ".";

const meta = {
  component: CardHeader,
} satisfies Meta<typeof CardHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => <CardHeader {...args} />,
};
