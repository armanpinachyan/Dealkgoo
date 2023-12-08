import React, { HTMLInputTypeAttribute } from 'react';
import './default-input.scss';

interface IThisProps {
  title: string;
  icon?: any;
  disabled?: boolean;
  type?: HTMLInputTypeAttribute | undefined;
  value?: string;
  placeholder?: string;
}

function DefaultInput({ title, icon, disabled = false, type, value, placeholder }: IThisProps) {
  return (
    <label className="def-input">
      <span className="def-input-title">{title}</span>
      <input
        type={type ? type : 'text'}
        disabled={disabled}
        value={value}
        placeholder={placeholder}
      />
      {icon && icon}
    </label>
  );
}

export default DefaultInput;
