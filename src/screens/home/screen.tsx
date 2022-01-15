import React, { useCallback, useState } from 'react';
import { BaseButton } from '@components/base-button/base-button';
import { Input } from '@components/input/input';
import { ScreenContainer } from '@components/screen-container/screen-container';
import { Tooltip } from '@components/tooltip/tooltip';
import debounce from 'lodash/debounce';
import { Heading } from '@components/heading/heading';

export function HomeScreen() {
  const [inputValue, setInputValue] = useState('');
  //todo: move into container
  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };
  const debouncedInputChange = useCallback(debounce(handleInputChange, 300), []);
  return (
    <div className='w-full'>
      <Heading as='h1' className='p-lg max-w-max'>
        Deezer
      </Heading>
      <ScreenContainer className='flex flex-col p-xl justify-center items-center'>
        <div className='flex justify-center'>
          <div className='w-96 relative'>
            <Input className='w-full' defaultValue={inputValue} onChange={debouncedInputChange} />
            <Tooltip open={!!inputValue} className='mt-md w-full'>
              Content
            </Tooltip>
          </div>

          <BaseButton className='bg-primary ml-lg'>Home Screen</BaseButton>
        </div>
      </ScreenContainer>
    </div>
  );
}
