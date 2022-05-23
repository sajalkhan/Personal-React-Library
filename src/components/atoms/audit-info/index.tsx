import { Text } from 'components/atoms/text';
import { mapModifiers } from 'libs/component';
import React from 'react';

export type Props = {
  createdBy?: string;
  createdDate?: Date;
  updatedBy?: string;
  updatedDate?: Date;
};

export const AuditInfo: React.FC<Props> = ({ createdBy, createdDate, updatedBy, updatedDate }) => {
  const componentClassName = mapModifiers('a-audit-info');
  const className = `${componentClassName}`.trim();

  return (
    <div className={className}>
      <Text>Audit Log:</Text>
      <hr />
      <Text as="p">
        Created by {createdBy} on {createdDate?.toLocaleString()}
      </Text>
      <Text as="p">
        Updated by {updatedBy} on {updatedDate?.toLocaleString()}
      </Text>
    </div>
  );
};
