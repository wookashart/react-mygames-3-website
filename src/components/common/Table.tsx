/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import dateFormat from 'dateformat';

// === Components === //
import Link from 'next/link';

// === Config === //
import { TableColumns } from '../../content/types/table';
import { colors } from '../../styles/variables';

interface TableProps {
  columns: TableColumns[];
  data: any;
}

const Table = ({ data, columns }: TableProps) => {
  const component = (render: string, value: string | number, name?: string) => {
    let component;

    if (render) {
      if (render === 'img') {
        component = <img className="admin-table-img" src={typeof value === 'string' && value} alt="" />;
      } else if (render === 'gender') {
        component = value === 'M' ? 'Męzczyzna' : 'Kobieta';
      } else if (render === 'userType') {
        if (value === 'A') {
          component = 'Admin';
        } else if (value === 'SA') {
          component = 'Super Admin';
        } else {
          component = 'User';
        }
      } else if (render === 'date') {
        component = dateFormat(value, 'dd.mm.yyyy');
      } else if (render === 'url') {
        component = (
          <Link href={typeof value === 'string' && value}>
            <a>{name}</a>
          </Link>
        );
      }
    } else {
      component = value;
    }
    return component;
  };

  return (
    <>
      <div className="admin-table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              {columns.map(col => (
                <th key={col.key} className="admin-table-header">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.user_id}>
                {columns.map(col =>
                  col.key !== 'options' ? (
                    <td key={col.key} className="admin-table-cell">
                      {component(col.render, item[col.key])}
                    </td>
                  ) : (
                    'menu'
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style jsx>{`
        .admin-table-wrapper {
          margin: 30px 0;
        }

        .admin-table {
          width: 100%;
        }

        .admin-table-header {
          text-align: left;
          padding: 10px 5px;
          background-color: ${colors.ui.light};
          cursor: pointer;
        }

        .admin-table-cell {
          padding: 10px 5px;
        }

        .admin-table-img {
          display: block;
          width: 50px;
        }
      `}</style>
      <style global jsx>{`
        .admin-table-img {
          display: block;
          width: 50px;
        }
      `}</style>
    </>
  );
};

export default Table;
