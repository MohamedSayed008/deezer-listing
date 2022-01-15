import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

type NativeDiv = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface TooltipProps extends NativeDiv {
  arrowProps?: NativeDiv;
  open: boolean;
}

export function Tooltip(props: TooltipProps) {
  const { children, className = '', arrowProps = {}, open, ...rest } = props;
  const { className: arrowClassName, ...arrowRest } = arrowProps;
  if (!open) return null;
  return (
    <div className={`bg-grayLight mt-md p-lg relative rounded-sm ${className}`} {...rest}>
      <div
        className={`w-0 h-0 border-8 border-transparent border-b-grayLight absolute -top-4 left-8 ${arrowClassName}`}
        {...arrowRest}
      />
      {children}
    </div>
  );
}
