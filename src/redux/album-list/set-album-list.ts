import { PayloadAction } from '@reduxjs/toolkit';
import { ReducerFunction } from '@redux/store';
import { AlbumListReduxState } from '@redux/album-list/index';

// payload
export type SetAlbumListPayloadType = {
  albums: any[] //@fixme: typescript

};
// action type
export type SetAlbumListActionType = PayloadAction<SetAlbumListPayloadType>;

// action reducer
export const setAlbumListReducer: ReducerFunction<AlbumListReduxState, SetAlbumListActionType> = (state, action) => {
  // action.payload
  const { albums } = action.payload;

  state.albums = albums;
};
