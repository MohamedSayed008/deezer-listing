import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap'
            rel='stylesheet'
          />
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta name='description' content='Next Generation Social Commerce Solution for Businesses' />
          <meta name='keywords' content='social media commerce buy whatsapp instagram' />
          <meta name='theme-color' content='#40908A' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-title' content='Deezer' />
          <meta name='apple-mobile-web-app-status-bar-style' content='#4BA783' />
          <link
            href='https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500;600&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
