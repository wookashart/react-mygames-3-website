import React, { Component } from 'react';

// Config

// Components
import Head from 'next/head';
import Page from '../src/components/layout/Page';
import Wrapper from '../src/components/common/Wrapper';
import Loader from '../src/components/common/Loader';
import HomepageNewsCarousel from '../src/components/homepage/HomepageNewsCarousel';
import HomepageLastRelease from '../src/components/homepage/HomepageLastRelease';

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
              <Wrapper>
                <HomepageLastRelease data={this.state.data} />
              </Wrapper>
            </>
          )}
          <style jsx>{``}</style>
        </>
      </Page>
    );
  }
}

export default Index;
