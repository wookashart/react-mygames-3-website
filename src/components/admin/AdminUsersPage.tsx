/* eslint-disable @typescript-eslint/camelcase */
import React, { Component } from 'react';

// === Components === //
import AdminPageMenu from './AdminPageMenu';
import Breadcrumbs from '../common/Breadcrumbs';
import Pagination from '../common/Pagination';
import Loader from '../common/Loader';
import Table from '../common/Table';

// === Config === //
import { ADMIN_USERS_TABLE } from '../../tables/AdminUsersTable';

interface AdminUsersPageProps {
  pageId: string;
}

class AdminUsersPage extends Component<AdminUsersPageProps> {
  state = {
    loading: true,
    data: null,
    error: false,
    listSize: 25,
  };

  componentDidMount() {
    this.onLoadUsersData();
  }

  onLoadUsersData = (selectedPage?: number) => {
    const data = {
      listSize: this.state.listSize,
      page: selectedPage ? selectedPage : this.props.pageId,
    };

    this.setState({ loading: true }, () => {
      fetch('/api/adminUsers', {
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
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
        });
    });
  };

  render() {
    return (
      <>
        <Breadcrumbs
          pages={[
            { title: 'Admin', url: '/admin' },
            { title: 'Użytkownicy', url: '/admin/users' },
          ]}
        />
        <AdminPageMenu />
        {this.state.loading ? (
          <Loader />
        ) : (
          <>
            <Table data={this.state.data.users} columns={ADMIN_USERS_TABLE} />
            <Pagination
              page={Number(this.props.pageId)}
              url="/admin/users"
              maxPages={Math.ceil(this.state.data.filteredCount / this.state.listSize)}
              // urlParams={this.props.urlParams}
              handleRefreshData={this.onLoadUsersData}
            />
          </>
        )}

        <style jsx>{``}</style>
      </>
    );
  }
}

export default AdminUsersPage;
