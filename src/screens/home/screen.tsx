import React from 'react';
import { BaseButton } from '@components/base-button/base-button';
import { Input } from '@components/input/input';

export function HomeScreen() {
  return (
    <div className='flex pt-xl'>
      <Input className='ml-lg' />
      <BaseButton className='bg-primary ml-lg'>Home Screen</BaseButton>
    </div>
  );
}
