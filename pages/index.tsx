import React from 'react';

import Page from '../src/components/layout/Page';

const Index = () => (
  <Page>
    <>
      <p>Hello world</p>
      <style jsx>
        {`
          p {
            color: red;
          }
        `}
      </style>
    </>
  </Page>
);

export default Index;
