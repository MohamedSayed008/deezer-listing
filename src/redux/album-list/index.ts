import { setAlbumListReducer } from '@redux/album-list/set-album-list';
import { createSlice } from '@reduxjs/toolkit';
import { Album } from '@screens/home/types';
import { setLoadingAlbumsReducer } from '@redux/album-list/set-album-list-loading';

export interface AlbumListReduxState {
  albums: Album[];
  artistName: string;
  isLoadingAlbums?: boolean;
}

export const initialAlbumsState: AlbumListReduxState = {
  albums: [],
  artistName: '',
};

export const AuthSlice = createSlice({
  name: 'albums',
  initialState: initialAlbumsState,
  reducers: {
    setAlbumListAction: setAlbumListReducer,
    setLoadingAlbumsAction: setLoadingAlbumsReducer,
  },
});

// Action creators are generated for each case reducer function
export const { setAlbumListAction, setLoadingAlbumsAction } = AuthSlice.actions;

export default AuthSlice.reducer;
