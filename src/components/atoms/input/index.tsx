import { mapModifiers } from 'libs/component';
import React from 'react';

export type inputProps = {
  placeholder?: string;
  size?: 'small' | 'medium' | 'large';
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputText: React.FC<inputProps> = ({ size, name, onChange, placeholder }) => {
  const componentClassName = mapModifiers('a-input', size && `size-${size}`);
  const className = `${componentClassName}`.trim();

  return (
    <div className={className}>
      <input className="a-input__text" type="text" placeholder=" " name={name} onChange={onChange} />
      <label className="a-input__label">{placeholder}</label>
    </div>
  );
};
