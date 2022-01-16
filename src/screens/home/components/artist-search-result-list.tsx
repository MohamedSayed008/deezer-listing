import React, { MouseEventHandler, useEffect } from 'react';
import { Artist } from '@screens/home/types';

export interface ArtistSearchResultListProps {
  artists: Artist[];
  onClick: MouseEventHandler<HTMLUListElement>;
  onClose(): void;
}
export function ArtistSearchResultList(props: ArtistSearchResultListProps) {
  const { artists = [], onClick, onClose } = props;

  //handle close on Escape
  useEffect(() => {
    const handleClose = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document?.addEventListener('keyup', handleClose);
    return () => document?.removeEventListener('keyup', handleClose);
  }, []);

  return (
    <ul className='mt-md' onClick={onClick}>
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
