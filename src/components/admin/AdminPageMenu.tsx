import React from 'react';
import { useRouter } from 'next/router';

// Componentns
import ButtonLink from '../common/ButtonLink';

const AdminPageMenu = () => {
  const router = useRouter();

  return (
    <>
      <ul>
        <li>
          <ButtonLink
            title="Użytkownicy"
            url="/admin/users"
            variant={router.pathname.match('/admin/users') ? 'active' : ''}
          />
        </li>
        <li>
          <ButtonLink
            title="Platformy"
            url="/admin/platforms"
            variant={router.pathname.match('/admin/platforms') ? 'active' : ''}
          />
        </li>
        <li>
          <ButtonLink
            title="Dystrybucja"
            url="/admin/distribution"
            variant={router.pathname.match('/admin/distribution') ? 'active' : ''}
          />
        </li>
      </ul>
      <style jsx>{`
        ul {
          list-style: none;
          margin: 10px 0;
          padding: 0;
          display: flex;
          flex-flow: row wrap;
          margin-left: -10px;
          width: calc(100% + 20px);
        }
      `}</style>
    </>
  );
};

export default AdminPageMenu;
