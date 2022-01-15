import { setAlbumListReducer } from '@redux/album-list/set-album-list';
import { createSlice } from '@reduxjs/toolkit';

export interface AlbumListReduxState {
  albums: any[];
}

export const initialAlbumsState: AlbumListReduxState = {
  albums: [],
};

export const AuthSlice = createSlice({
  name: 'albums',
  initialState: initialAlbumsState,
  reducers: {
    setAlbumListAction: setAlbumListReducer,
  },
});

// Action creators are generated for each case reducer function
export const { setAlbumListAction } = AuthSlice.actions;

export default AuthSlice.reducer;
