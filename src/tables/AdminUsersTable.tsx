export const ADMIN_USERS_TABLE = [
  {
    header: 'Avatar',
    key: 'user_avatar',
    render: 'img',
  },
  {
    header: 'Login',
    key: 'user_login',
    sortable: true,
  },
  {
    header: 'Email',
    key: 'user_email',
    sortable: true,
  },
  {
    header: 'Płeć',
    key: 'user_gender',
    render: 'gender',
    sortable: true,
  },
  {
    header: 'Data urodzenia',
    key: 'user_date',
    render: 'date',
    sortable: true,
  },
  {
    header: 'Miasto',
    key: 'user_city',
    sortable: true,
  },
  {
    header: 'Opis',
    key: 'user_description',
  },
  {
    header: 'Typ',
    key: 'user_type',
    render: 'userType',
    sortable: true,
  },
  {
    header: 'Data dołączenia',
    key: 'user_register_date',
    render: 'date',
    sortable: true,
  },
  {
    header: 'Opcje',
    key: 'options',
  },
];
