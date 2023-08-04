import type { Meta, StoryObj } from "@storybook/react";

import { CardBody } from "../CardBody";

const meta = {
  component: CardBody,
} satisfies Meta<typeof CardBody>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardBodyTest: Story = {
  args: {
    title: "Hola mundo",
    subtitle: "subtitulo",
    textColor: "warning",
  },
  render: (args) => <CardBody {...args} />,
};
