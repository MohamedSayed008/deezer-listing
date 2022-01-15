import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ScreenContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export function ScreenContainer(props: ScreenContainerProps) {
  const { children, className = '', ...rest } = props;
  return (
    <div className={`min-w-18 max-w-6xl mx-auto w-11/12 ${className}`} {...rest}>
      {children}
    </div>
  );
}
