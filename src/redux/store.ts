import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from '@redux/reducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Action, AnyAction } from 'redux';

export const store = configureStore({
  reducer: appReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type ReducerFunction<S = any, A extends Action = AnyAction> = (state: S, action: A) => S | void;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
