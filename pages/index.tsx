import Head from 'next/head';
import React from 'react';
import { Page, Section } from 'reactjs-slot-layout/dist';
import { HomeScreen } from '@screens/home/screen';

const HomePage = () => {
  return (
    <Page layout='OneColumn'>
      <Section slot='content'>
          <Head>
              <title>Deezer - Search</title>
          </Head>
        <HomeScreen />
      </Section>
    </Page>
  );
};

export default HomePage;
