import React, { Component } from 'react';

// Components
import Head from 'next/head';
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
