import React, { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef, LegacyRef } from 'react';

type NativeHTMLButton = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export interface BaseButtonProps extends NativeHTMLButton {
  isLoading?: boolean;
  loadingText?: string;
}

export const BaseButton = forwardRef((props: BaseButtonProps, ref: LegacyRef<HTMLButtonElement>) => {
  const { isLoading = false, loadingText = 'Loading...', children, className = '', ...rest } = props;
  return (
    <button className={`btn-base ${className}`} {...rest} ref={ref}>
      {isLoading ? loadingText : children}
    </button>
  );
});

BaseButton.displayName = 'BaseButton';
