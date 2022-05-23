import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { AuditInfo } from './';

export default {
  title: 'components/atoms/AuditInfo',
  component: AuditInfo,
  parameters: {
    paddings: {
      default: 'small',
    },
    backgrounds: {
      default: 'gray',
    },
  },
} as ComponentMeta<typeof AuditInfo>;

const Template: ComponentStory<typeof AuditInfo> = args => <AuditInfo {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  createdBy: 'sajal',
  createdDate: new Date(),
  updatedBy: 'abir',
  updatedDate: new Date(),
};
