import { combineReducers, Reducer } from 'redux';
import albumList, { AlbumListReduxState } from '@redux/album-list';

export type CombinedStateType = {
  albumList: AlbumListReduxState;
};

export const appReducer: Reducer<CombinedStateType> = combineReducers({
  albumList,
});
