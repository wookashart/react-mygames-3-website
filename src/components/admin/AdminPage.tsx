import React from 'react';

// Components
import AdminPageMenu from './AdminPageMenu';
import Breadcrumbs from '../common/Breadcrumbs';

const AdminPage = () => {
  return (
    <>
      <Breadcrumbs pages={[{ title: 'Admin', url: '/admin' }]} />
      <AdminPageMenu />
    </>
  );
};

export default AdminPage;
