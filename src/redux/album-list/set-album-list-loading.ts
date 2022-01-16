import { PayloadAction } from '@reduxjs/toolkit';
import { AlbumListReduxState } from '@redux/album-list/index';
import { ReducerFunction } from '@redux/store';
// payload
type LoadingAlbumsPayload = boolean;

// action type
export type SetLoadingAlbumsAction = PayloadAction<LoadingAlbumsPayload>;

// action reducer
export const setLoadingAlbumsReducer: ReducerFunction<AlbumListReduxState, SetLoadingAlbumsAction> = (
  state,
  action
) => {
  state.isLoadingAlbums = action.payload;
};
