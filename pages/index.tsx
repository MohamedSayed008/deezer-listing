import Head from 'next/head';
import React from 'react';
import { Page, Section } from 'reactjs-slot-layout/dist';
import { HomeScreen } from '@screens/home/screen';

const Home = () => {
  return (
    <Page layout='TwoColumnLeft'>
      <Head>
        <title>Deezer - Search</title>
      </Head>
      <Section slot='content'>
        <HomeScreen />
      </Section>
    </Page>
  );
};

export default Home;
