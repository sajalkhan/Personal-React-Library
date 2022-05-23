import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { TextArea } from '.';

export default {
  title: 'components/atoms/TextArea',
  component: TextArea,
  parameters: {
    paddings: {
      default: 'small',
    },
    backgrounds: {
      default: 'gray',
    },
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = args => <TextArea {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  placeholder: 'Site Description',
};
