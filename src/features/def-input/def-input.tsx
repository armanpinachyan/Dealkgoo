import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const LabelPlaceholder = styled.span<{ $status: boolean }>`
  font-size: 16px;
  color: #d2d4df;
  position: absolute;
  left: 22px;
  top: ${({ $status }) => ($status ? '25%' : '50%')};
  transform: translateY(-50%);
  cursor: text;
  transition: 0.3s;
`;

const Label = styled.label<{ $textarea: boolean | undefined }>`
  width: 100%;
  height: ${({ $textarea }) => ($textarea ? '80px' : '60px')};
  border-radius: 15px;
  filter: drop-shadow(0px 5px 12.5px rgba(184, 193, 218, 0.3));
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
  ${({ $textarea }) =>
    $textarea &&
    css`
      ${LabelPlaceholder} {
        top: 25%;
      }
    `}
`;

const LabelInput = styled.input<{ $status: boolean }>`
  width: 100%;
  height: ${({ $status }) => ($status ? '85%' : '100%')};
  background: transparent;
  position: absolute;
  left: 0;
  bottom: 0;
  padding-left: 22px;
  font-size: 16px;
  color: #212121;
  font-weight: bold;
  padding-right: 12px;
`;

const LabelTextarea = styled.textarea<{ $status: boolean }>`
  width: 100%;
  height: ${({ $status }) => ($status ? '85%' : '100%')};
  background: transparent;
  position: absolute;
  left: 0;
  bottom: 0;
  padding-left: 22px;
  padding-top: 2px;
  font-size: 16px;
  color: #212121;
  font-weight: bold;
  resize: none;
`;

interface IThisProps {
  onChange?: (value: string) => void;
  placeholder: string;
  type?: string;
  className?: string;
  icon?: any;
  textarea?: boolean;
}

function DefInput({ onChange, placeholder, type, className, icon, textarea }: IThisProps) {
  const [value, setValue] = useState<string>('');
  const [checkTextarea, setCheckTextarea] = useState(true);
  const [input, setInput] = useState<boolean>(false);

  function focus() {
    setInput(true);
    if (textarea) {
      setCheckTextarea(false);
    }
  }

  function blur() {
    if (!value) {
      setInput(false);
    }
    if (textarea && !value) {
      setCheckTextarea(true);
    }
  }

  function change(e: any) {
    onChange && onChange(e.target.value);
    setValue(e.target.value);
    if (!e.target.value) {
      setInput(false);
      if (textarea) {
        setCheckTextarea(true);
      }
    } else {
      setInput(true);
      if (textarea) {
        setCheckTextarea(false);
      }
    }
  }

  return (
    <Label className={className ? className : ''} $textarea={textarea}>
      {checkTextarea && (
        <LabelPlaceholder $status={input} className="def-input-placeholder">
          {placeholder}
        </LabelPlaceholder>
      )}

      {textarea ? (
        <LabelTextarea
          $status={input}
          onFocus={focus}
          onBlur={blur}
          value={value}
          onInput={change}
          autoComplete="new-password"
        />
      ) : (
        <LabelInput
          $status={input}
          type={type ? type : 'text'}
          onFocus={focus}
          onBlur={blur}
          value={value}
          onInput={change}
          autoComplete="new-password"
        />
      )}

      {icon ? icon : ''}
    </Label>
  );
}

export default DefInput;
