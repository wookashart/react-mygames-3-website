import React, { Component } from 'react';

// Components
import Wrapper from '../common/Wrapper';

class Error404Page extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <div>
            <h1>404</h1>
            <h2>Niestety podana strona nie istnieje</h2>
          </div>
        </Wrapper>
      </>
    );
  }
}

export default Error404Page;
