import { PayloadAction } from '@reduxjs/toolkit';
import { ReducerFunction } from '@redux/store';
import { AlbumListReduxState } from '@redux/album-list/index';
import { Album } from '@screens/home/types';

// payload
export type SetAlbumListPayloadType = {
  albums: Album[];
  artistName: string;
};
// action type
export type SetAlbumListActionType = PayloadAction<SetAlbumListPayloadType>;

// action reducer
export const setAlbumListReducer: ReducerFunction<AlbumListReduxState, SetAlbumListActionType> = (state, action) => {
  // action.payload
  const { albums, artistName } = action.payload;

  state.albums = albums;
  state.artistName = artistName;
};
