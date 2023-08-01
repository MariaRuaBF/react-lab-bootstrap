import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@components";

const meta = {
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <>
      <Checkbox
        onChange={(event) => {
          console.log(event);
        }}
        role="enable-audio"
        label="Enable audio"
        {...args}
      />
    </>
  ),
};
