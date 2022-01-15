import React from 'react';
import { Slot } from 'reactjs-slot-layout/dist';

export function OneColumnLayout({ sections }: any) {
  return (
    <Slot sections={sections} name='page-wrapper' component='<>'>
      {/*Header slot*/}
      <Slot sections={sections} name='header-wrapper' component='<>'>
        <Slot sections={sections} name='header-top' component='<>' />

        <Slot sections={sections} name='header-center' component='<>' />

        <Slot sections={sections} name='header-bottom' component='<>' />
      </Slot>
      {/*Header slot*/}

      {/*Main slot*/}
      <Slot sections={sections} name='main-wrapper' component='<>'>
        <div className='flex h-screen'>
          <Slot sections={sections} name='content' component='<>' />
        </div>
      </Slot>
      {/*Main slot*/}

      {/*Footer slot*/}
      <Slot sections={sections} name='footer-wrapper' component='<>'>
        <Slot sections={sections} name='footer-top' component='<>' />

        <Slot sections={sections} name='footer-center' component='<>' />

        <Slot sections={sections} name='footer-bottom' component='<>' />
      </Slot>
      {/*Footer slot*/}
    </Slot>
  );
}
