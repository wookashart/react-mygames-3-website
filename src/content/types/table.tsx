export interface TableColumns {
  header: string;
  key: string;
  sortable?: boolean;
  dataProps?: TableColumnsDataProps;
  headerProps?: TableColumnsDataProps;
  render?: string;
}

interface TableColumnsDataProps {
  className: string;
}
