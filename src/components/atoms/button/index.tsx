import { mapModifiers, ModifierProp } from 'libs/component';
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { MdOutlineClose, MdSave } from 'react-icons/md';

type InheritedProps = Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'onClick'> &
  Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick' | 'disabled'>;

export interface buttonProps extends InheritedProps {
  children?: React.ReactNode;
  modifiers?: ModifierProp<
    | 'primary'
    | 'secondary'
    | 'third'
    | 'fourth'
    | 'red'
    | 'transparent'
    | 'transparent-black'
    | 'text'
    | 'save'
    | 'close'
  >;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const Button: React.FC<buttonProps> = ({
  type = 'button',
  modifiers,
  size,
  className: additionalClassName = '',
  children,
  onClick,
}) => {
  const componentClassName = mapModifiers('a-button', modifiers, size);
  const className = `${componentClassName} ${additionalClassName}`.trim();

  return (
    <button type={type} className={className} onClick={onClick}>
      {modifiers?.includes('save') && <MdSave />}
      {modifiers?.includes('close') && <MdOutlineClose />}
      {children}
    </button>
  );
};

Button.displayName = 'button';
