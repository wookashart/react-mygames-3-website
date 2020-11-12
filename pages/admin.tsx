import React, { Component } from 'react';

// Config
import { UserDataContext } from '../src/components/layout/Page';
import { UserData } from '../src/content/types/user';

// Components
import Head from 'next/head';
import Page from '../src/components/layout/Page';
import Wrapper from '../src/components/common/Wrapper';
import AdminPage from '../src/components/admin/AdminPage';
import Error404Page from '../src/components/404/404Page';

class Index extends Component {
  render() {
    return (
      <Page>
        <UserDataContext.Consumer>
          {(userData: UserData) => (
            <>
              {userData ? (
                <>
                  <Head>
                    <title>Administracja strony | MyGames</title>
                  </Head>
                  <Wrapper>
                    <AdminPage />
                  </Wrapper>
                  <style jsx>{``}</style>
                </>
              ) : (
                <Error404Page />
              )}
            </>
          )}
        </UserDataContext.Consumer>
      </Page>
    );
  }
}

export default Index;
