import React, { Component } from 'react';

// Config
import Head from 'next/head';

// Helpers

// Components
import Page from '../src/components/layout/Page';
import Wrapper from '../src/components/common/Wrapper';

class Index extends Component {
  render() {
    return (
      <Page>
        <>
          <Head>
            <title>Nazwa strony | MyGames</title>
          </Head>
          <Wrapper>
            <div>Treść</div>
          </Wrapper>
          <style jsx>{``}</style>
        </>
      </Page>
    );
  }
}

export default Index;
