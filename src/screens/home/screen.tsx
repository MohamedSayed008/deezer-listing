import React from 'react';
import { ScreenContainer } from '@components/screen-container/screen-container';
import { Heading } from '@components/heading/heading';
import { AutoComplete } from '@screens/home/containers/auto-complete';
import { ArtistAlbumListContainer } from '@screens/home/containers/artist-album-list-container';

export function HomeScreen() {
  return (
    <div className='w-full'>
      <Heading as='h1' className='p-lg max-w-max'>
        Deezer
      </Heading>
      <ScreenContainer className='flex flex-col py-xl justify-center items-center'>
        <AutoComplete />
        <ArtistAlbumListContainer />
      </ScreenContainer>
    </div>
  );
}
