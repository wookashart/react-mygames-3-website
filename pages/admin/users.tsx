import React from 'react';

// === Components === //
import Head from 'next/head';
import Page from '../../src/components/layout/Page';
import Wrapper from '../../src/components/common/Wrapper';
import Error404Page from '../../src/components/404/404Page';
import AdminUsersPage from '../../src/components/admin/AdminUsersPage';

// === Config === //
import { UserDataContext } from '../../src/components/layout/Page';
import { UserData } from '../../src/content/types/user';

const Users = () => {
  return (
    <Page>
      <UserDataContext.Consumer>
        {(userData: UserData) => (
          <>
            {userData ? (
              <>
                <Head>
                  <title>Administracja strony - uzytkownicy (str. 1) | MyGames</title>
                </Head>
                <Wrapper>
                  <AdminUsersPage pageId="1" />
                </Wrapper>
              </>
            ) : (
              <Error404Page />
            )}
          </>
        )}
      </UserDataContext.Consumer>
    </Page>
  );
};

export default Users;
