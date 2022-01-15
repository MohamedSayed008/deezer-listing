import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface HeadingProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
export function Heading(props: HeadingProps) {
  const { as: Heading = 'h2', className = '', ...rest } = props;
  return <Heading className={`font-extrabold text-4xl ${className}`} {...rest} />;
}
