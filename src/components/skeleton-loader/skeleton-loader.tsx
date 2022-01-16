import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import skeleton from '@styles/skeleton.module.css';

interface SkeletonLoaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type?: 'pulse' | 'wave';
  isText?: boolean;
  height?: string;
  width?: string;
}

export const SkeletonLoader = (props: SkeletonLoaderProps) => {
  const { type = 'wave', isText = false, className = '', height = 'h-6', width = 'w-full', ...rest } = props;

  return (
    <div
      className={`${skeleton.loader} ${isText ? `${skeleton.text}` : ''} ${
        skeleton[type]
      } ${height} ${width} ${className}`}
      {...rest}
    />
  );
};
