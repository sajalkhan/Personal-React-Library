import { mapModifiers } from 'libs/component';
import React from 'react';

export type TextAreaProps = {
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const TextArea: React.FC<TextAreaProps> = ({ name, value, placeholder, onChange }) => {
  const componentClassName = mapModifiers('a-text-area');
  const className = `${componentClassName}`.trim();

  return (
    <div className={className}>
      <textarea rows={2} className="a-text-area__input" name={name} value={value} placeholder=" " onChange={onChange} />
      <label className="a-text-area__label">{placeholder}</label>
    </div>
  );
};
