import { HookReturnType, ICallbackParams, useApiHookWrapper } from '@hooks/use-api-hook-wrapper';
import { DEEZER_BASE_URL, httpClient } from '@util/http-client';

import { Track } from '@screens/home/types';

type Input = string;

type Output = Track[];

const mountFn = async (props: ICallbackParams<Input, Output>) => {
  const { input } = props;

  if (!input) return [];

  const sanitzedInput = input.replace(DEEZER_BASE_URL, '');

  const { data = {} } = await httpClient.GET({
    url: `/api/album-tracks/${sanitzedInput}`,
  });

  const { data: TrackList = [] } = data;

  return TrackList as Output;
};

const errorFn = (props: ICallbackParams<Input, Output>) => {
  console.warn(props.error);
};

export const useGetAlbumTracks = (url: string): HookReturnType<Input, Output> => {
  return useApiHookWrapper({
    errorFn,
    initialInput: url,
    initialIsLoading: true,
    mountFn,
    skipInitialApiCallOnEmptyInputs: false,
    unmountFn: undefined,
  });
};
