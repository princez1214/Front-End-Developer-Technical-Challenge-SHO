import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Box } from '../../components/Utils/Box';

export default {
  title: "Utils/Box",
  component: Box,
} as ComponentMeta<typeof Box>;
  
const Template: ComponentStory<typeof Box> = () => <Box css={{width: '100px', height: '200px', background: 'red'}}></Box>;

export const BoxStyle = Template.bind({});
