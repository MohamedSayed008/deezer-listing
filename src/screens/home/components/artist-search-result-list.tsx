import React, { MouseEventHandler, useEffect } from 'react';
import { Artist } from '@screens/home/types';
import { SkeletonLoader } from '@components/skeleton-loader/skeleton-loader';

export interface ArtistSearchResultListProps {
  artists: Artist[];
  onClick: MouseEventHandler<HTMLUListElement>;
  onClose(): void;
  isLoading?: boolean;
}
export function ArtistSearchResultList(props: ArtistSearchResultListProps) {
  const { artists = [], onClick, onClose, isLoading = false } = props;

  //handle close on Escape
  useEffect(() => {
    const handleCloseOnEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document?.addEventListener('keyup', handleCloseOnEsc);
    return () => document?.removeEventListener('keyup', handleCloseOnEsc);
  }, []);

  if (isLoading) {
    return (
      <div>
        <SkeletonLoader className='mt-md' />
        <SkeletonLoader className='mt-md' />
        <SkeletonLoader className='mt-md' />
      </div>
    );
  }

  return (
    <ul className='mt-md' onClick={onClick}>
      {!artists.length && !isLoading && <p>No Results</p>}
      {artists.map((artist) => {
        const { id, name } = artist;
        return (
          <li
            className='px-lg py-xs border-b border-b-grayDarker cursor-pointer hover:text-white hover:bg-black hover:bg-opacity-5'
            key={id}
            data-id={id}
            data-name={name}
          >
            {name}
          </li>
        );
      })}
    </ul>
  );
}
