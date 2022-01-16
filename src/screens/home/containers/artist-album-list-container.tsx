import React from 'react';
import { useAppSelector } from '@redux/store';
import { SkeletonLoader } from '@components/skeleton-loader/skeleton-loader';
import { AlbumListSkeleton } from '@screens/home/components/album-list-skeleton';
import { Heading } from '@components/heading/heading';
import { AlbumList } from '@screens/home/containers/album-list';

export function ArtistAlbumListContainer() {
  ///Redux
  const { albums, isLoadingAlbums, artistName } = useAppSelector((state) => state.albumList);

  if (!artistName) return null;

  if (isLoadingAlbums)
    return (
      <div className='mt-xxxl w-full'>
        <SkeletonLoader className='w-60' />
        <hr className='my-md border-grayLighter' />
        <SkeletonLoader className='mb-md w-60' />
        <AlbumListSkeleton />
      </div>
    );

  return (
    <div className='mt-xxxl w-full'>
      <Heading className='font-normal text-2xl'>Search results for &ldquo;{artistName}&rdquo;</Heading>
      <hr className='my-md border-grayLighter' />
      <AlbumList albums={albums} />
    </div>
  );
}
