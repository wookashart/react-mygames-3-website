import React, { Component } from 'react';

// Components
import Head from 'next/head';
import Page from '../src/components/layout/Page';
import Error404Page from '../src/components/404/404Page';

class Error extends Component {
  render() {
    return (
      <Page>
        <>
          <Head>
            <title>Błąd 404 | MyGames</title>
          </Head>
          <Error404Page />
          <style jsx>{``}</style>
        </>
      </Page>
    );
  }
}

export default Error;
