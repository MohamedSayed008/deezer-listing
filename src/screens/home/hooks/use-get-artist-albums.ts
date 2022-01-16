import { HookReturnType, ICallbackParams, useApiHookWrapper } from '@hooks/use-api-hook-wrapper';
import { httpClient } from '@util/http-client';

import { Album } from '@screens/home/types';
import { setAlbumListAction, setLoadingAlbumsAction } from '@redux/album-list';

export type SelectedArtistData = { id?: string; name?: string };
type Input = SelectedArtistData;

type Output = Album[];

const mountFn = async (props: ICallbackParams<Input, Output>) => {
  const { input, dispatch } = props;
  const { id, name } = input;

  dispatch(setLoadingAlbumsAction(true));
  const { data = {} } = await httpClient.GET({
    url: `/api/artist-albums/${id}`,
  });

  const { data: AlbumList = [] } = data;

  dispatch(
    setAlbumListAction({
      artistName: name,
      albums: AlbumList as Output,
    })
  );
  dispatch(setLoadingAlbumsAction(false));

  return AlbumList as Output;
};

const errorFn = (props: ICallbackParams<Input, Output>) => {
  console.warn(props.error);
};

export const useGetArtistAlbums = (): HookReturnType<Input, Output> => {
  return useApiHookWrapper({
    errorFn,
    initialInput: undefined,
    initialIsLoading: true,
    mountFn,
    skipInitialApiCallOnEmptyInputs: true,
    unmountFn: undefined,
  });
};
