import { useEffect, useState } from 'react';
import { AppDispatch, useAppDispatch } from '@redux/store';

export interface ICallbackParams<T, O = any> {
  isLoading: boolean;
  isFinishedOnce: boolean;
  error: string | undefined;
  hookData: O;
  input: T;
  exception?: Error;
  dispatch: AppDispatch;
}

export type CallbackFunctionType = (props: ICallbackParams<any>) => any;

type GenStateType<T> = [T, (f: T) => void];

interface HookProps {
  initialIsLoading?: boolean;
  skipInitialApiCallOnEmptyInputs?: boolean;
  initialInput?: Record<any, any> | string | number | undefined;
  mountFn: CallbackFunctionType;
  errorFn: CallbackFunctionType;
  unmountFn: CallbackFunctionType;
}

export type HookReturnType<I, O = any> = [
  {
    isLoading: boolean;
    error: string | undefined;
    isFinishedOnce: boolean;
    hookData: O;
  },
  GenStateType<I>[1]
];

export function useApiHookWrapper(props: HookProps): HookReturnType<any> {
  // deconstruct
  const {
    initialIsLoading = false,
    initialInput,
    skipInitialApiCallOnEmptyInputs = false,
    mountFn,
    unmountFn,
    errorFn,
  } = props;
  // initial states
  const [isLoading, setIsLoading] = useState(initialIsLoading);
  const [isFinishedOnce, setIsFinishedOnce] = useState(false);
  const [error, setError] = useState<string>();
  const [hookData, setHookData] = useState();
  const [input, setInput] = useState(initialInput);

  const dispatch = useAppDispatch();

  // will run on mount / update
  useEffect(() => {
    if (skipInitialApiCallOnEmptyInputs && (!input || Object.keys(input).length === 0)) {
      setIsLoading(false);
      return () => {};
    }

    let isObsolete = false;

    const fetchData = async () => {
      setError(undefined);
      setIsLoading(true);

      let res; // undefined

      try {
        res = await mountFn({ isLoading, isFinishedOnce, error, hookData, input, dispatch });
      } catch (e) {
        if (!isObsolete) {
          const errorMsg = e?.response?.data?.message || e.message;

          await errorFn?.({
            isLoading,
            isFinishedOnce,
            error: errorMsg,
            hookData,
            input,
            exception: e,
            dispatch,
          });
          setError(errorMsg);
        }
      }

      if (!isObsolete) {
        if (res) {
          setIsFinishedOnce(true);
          setHookData(res);
        }

        setIsLoading(false);
      }
    };

    // noinspection JSIgnoredPromiseFromCall
    fetchData();

    // will run on unmount, example cancellation of promises
    return async () => {
      isObsolete = true;
      await unmountFn?.({ isLoading, isFinishedOnce, error, hookData, input, dispatch });
    };
  }, [input]);

  return [{ isLoading, error, isFinishedOnce, hookData }, setInput];
}
