import React, { Component } from 'react';

// Config
import Head from 'next/head';

// Components
import Page from '../src/components/layout/Page';
import Wrapper from '../src/components/common/Wrapper';
import Loader from '../src/components/common/Loader';
import HomepageNewsCarousel from '../src/components/homepage/HomepageNewsCarousel';

class Index extends Component {
  state = {
    loading: true,
    data: null,
    error: false,
  };

  componentDidMount() {
    fetch('/api/homepage', {
      headers: {
        'Content-type': 'application/json',
      },
      method: 'POST',
      credentials: 'include',
    })
      .then(response => response.json())
      .then(json => {
        if (json && !json.error) {
          this.setState({ data: json, loading: false });
        } else {
          this.setState({ error: true, loading: false });
        }
        console.log(json);
      });
  }

  render() {
    return (
      <Page>
        <>
          <Head>
            <title>Strona główna | MyGames</title>
          </Head>
          {this.state.loading ? (
            <Loader />
          ) : (
            <>
              <HomepageNewsCarousel slides={this.state.data.latestArticles} />
              {/* <Wrapper></Wrapper> */}
            </>
          )}
          <style jsx>{``}</style>
        </>
      </Page>
    );
  }
}

export default Index;
