import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Color } from '../../components/Color';

export default {
  title: "Element/Color",
  component: Color,
} as ComponentMeta<typeof Color>;
  
const Template: ComponentStory<typeof Color> = (args) => <Color {...args} />;

export const ColorPanel = Template.bind({});
ColorPanel.args = {
  hex: "ff00ff"
};
