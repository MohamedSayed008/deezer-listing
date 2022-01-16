import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import { SkeletonLoader } from '@components/skeleton-loader/skeleton-loader';

const AlbumSkeleton = () => {
  return (
    <div className='w-52'>
      <SkeletonLoader className='h-52' />
      <SkeletonLoader className='mt-md' />
    </div>
  );
};

interface AlbumListSkeletonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
export function AlbumListSkeleton(props: AlbumListSkeletonProps) {
  const { className = '', ...rest } = props;
  return (
    <div className={`album-container ${className}`} {...rest}>
      <AlbumSkeleton />
      <AlbumSkeleton />
      <AlbumSkeleton />
      <AlbumSkeleton />
    </div>
  );
}
