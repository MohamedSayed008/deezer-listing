import { Heading } from '@components/heading/heading';
import { BaseImage } from '@components/base-image/base-image';
import React, { MouseEvent, useState } from 'react';
import { Album } from '@screens/home/types';
import { AlbumTrackList } from '@screens/home/containers/album-track-list';

export function AlbumList(props: { albums: Album[] }) {
  const { albums = [] } = props;
  const [selectedAlbum, setSelectedAlbum] = useState<number>();

  if (!albums.length)
    return <Heading className='font-semibold text-xl text-primary mb-md pl-md'>No Albums found</Heading>;

  const handleAlbumClick = (e: MouseEvent<HTMLDivElement>) => {
    const element = e.target as HTMLButtonElement;
    const id = Number(element.getAttribute('data-id'));
    if (!id) return;

    if (selectedAlbum === id) {
      setSelectedAlbum(undefined);
      return;
    }

    setSelectedAlbum(id);
  };

  return (
    <div className='w-full pl-md'>
      <Heading className='font-semibold text-xl text-primary mb-md'>ALBUMS</Heading>
      <div className='album-container' onClick={handleAlbumClick}>
        {albums.map((album) => {
          const { cover_medium, id, title } = album;
          return (
            <div key={id} data-id={id} className='w-52 h-max'>
              <div className='cursor-pointer'>
                <BaseImage src={cover_medium} alt={title} width={208} height={208} data-id={id} />
                <Heading
                  className='font-semibold text-xl my-md text-primary mb-md whitespace-nowrap overflow-hidden text-ellipsis'
                  data-id={id}
                >
                  {title}
                </Heading>

                <hr className='border-2 border-grayLighter' data-id={id} />
              </div>

              <div
                className='accordion-content mt-xl min-w-max flex flex-col absolute left-1/2 right-1/2 -translate-x-2/4'
                aria-expanded={selectedAlbum === id}
              >
                {selectedAlbum === id && <AlbumTrackList album={album} />}
              </div>

              {selectedAlbum === id && <div className='h-lg mb-lg' />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
