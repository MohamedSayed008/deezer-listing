import React, { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
  const { className = '', ...rest } = props;
  return <input ref={ref} {...rest} className={`input-base ${className}`} />;
});
Input.displayName = 'Input';
