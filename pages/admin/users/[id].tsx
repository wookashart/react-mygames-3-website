import React from 'react';
import { useRouter } from 'next/router';

// === Components === //
import Head from 'next/head';
import Page from '../../../src/components/layout/Page';
import Wrapper from '../../../src/components/common/Wrapper';
import Error404Page from '../../../src/components/404/404Page';
import AdminUsersPage from '../../../src/components/admin/AdminUsersPage';

// === Config === //
import { UserDataContext } from '../../../src/components/layout/Page';
import { UserData } from '../../../src/content/types/user';

const UsersId = () => {
  const router = useRouter();

  return (
    <Page>
      <UserDataContext.Consumer>
        {(userData: UserData) => (
          <>
            {userData && router.query.id ? (
              <>
                <Head>
                  <title>Administracja strony - uzytkownicy (str. {router.query.id}) | MyGames</title>
                </Head>
                <Wrapper>
                  <AdminUsersPage pageId={`${router.query.id}`} />
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

export default UsersId;
