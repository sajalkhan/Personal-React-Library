import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { InputText } from '.';

export default {
  title: 'components/atoms/InputText',
  component: InputText,
  parameters: {
    paddings: {
      default: 'small',
    },
    backgrounds: {
      default: 'gray',
    },
  },
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = args => <InputText {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  placeholder: 'Name',
};

export const Description = Template.bind({});
Description.args = {
  placeholder: 'Latitude',
};

export const SmallInputText = Template.bind({});
SmallInputText.args = {
  placeholder: 'Name',
  size: 'small',
};

export const MediumInputText = Template.bind({});
MediumInputText.args = {
  placeholder: 'Name',
  size: 'medium',
};

export const LargeInputText = Template.bind({});
LargeInputText.args = {
  placeholder: 'Name',
  size: 'large',
};
