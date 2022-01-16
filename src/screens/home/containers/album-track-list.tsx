import { BaseImage } from '@components/base-image/base-image';
import { Heading } from '@components/heading/heading';
import React from 'react';
import { Album } from '@screens/home/types';
import { AlbumTrackListTable } from '@screens/home/containers/album-track-list-table';

export function AlbumTrackList(props: { album: Album }) {
  const { album } = props;
  const { title, cover_medium, release_date, tracklist } = album || {};
  const releaseYear = new Date(release_date)?.getFullYear();

  return (
    <div>
      <div className='flex items-start pl-lg'>
        <div className='mr-lg'>
          <BaseImage src={cover_medium} alt={title} width={208} height={208} />
        </div>
        <Heading className='text-primary max-w-fit'>{title}</Heading>
      </div>

      <div className='bg-grayLighter pl-lg flex items-start rounded-sm -mt-xl max-w-full overflow-scroll'>
        <div className='w-52 mr-lg' />
        <div className='overflow-scroll max-h-md'>
          <AlbumTrackListTable releaseYear={releaseYear} trackListApiUrl={tracklist} />
        </div>
      </div>
    </div>
  );
}
