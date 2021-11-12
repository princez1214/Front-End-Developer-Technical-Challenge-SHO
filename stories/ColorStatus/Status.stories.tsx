import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Status } from '../../components/Elements/ColorStatus';

export default {
  title: "Element/ColorStatus",
  component: Status,
} as ComponentMeta<typeof Status>;
  
const Template: ComponentStory<typeof Status> = (args) => <Status {...args} />;

export const True = Template.bind({});
True.args = {
  passed: true
};

export const False = Template.bind({});
False.args = {
  passed: false
};
