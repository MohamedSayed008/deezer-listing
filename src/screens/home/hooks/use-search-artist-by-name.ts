import { HookReturnType, ICallbackParams, useApiHookWrapper } from '@hooks/use-api-hook-wrapper';
import { httpClient } from '@util/http-client';

import { Artist } from '@screens/home/types';

type Input = {
  keyword: string;
  itemCount?: number;
};

type Output = Artist[];

const mountFn = async (props: ICallbackParams<Input, Output>) => {
  const { input } = props;
  const { keyword, itemCount = 5 } = input;

  const { data = {} } = await httpClient.GET({
    url: `/api/artist-search/${keyword}`,
  });
  const { data: artistList = [] } = data;

  return artistList.slice(0, itemCount) as Output;
};

const errorFn = (props: ICallbackParams<Input, Output>) => {
  console.warn(props.error);
};

export const useSearchArtistByName = (): HookReturnType<Input, Output> => {
  return useApiHookWrapper({
    errorFn,
    initialInput: undefined,
    initialIsLoading: true,
    mountFn,
    skipInitialApiCallOnEmptyInputs: true,
    unmountFn: undefined,
  });
};
