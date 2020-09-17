import React, { Component } from 'react';

// Config
import Router from 'next/router';

// Helpers
import { colors, animation } from '../../styles/variables';

// Components
import ReactPaginate from 'react-paginate';

interface PaginationProps {
  page: number;
  url: string;
  maxPages: number;
  urlParams?: string;
}

class Pagination extends Component<PaginationProps> {
  handlePageClick = data => {
    if (data.selected + 1 !== this.props.page) {
      Router.replace(`${this.props.url}/${data.selected + 1}${this.props.urlParams ? this.props.urlParams : ''}`);
    }
  };

  render() {
    const { page, maxPages } = this.props;

    return (
      <>
        <div>
          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            breakLabel={'...'}
            breakClassName={'pagination-break'}
            pageCount={maxPages}
            marginPagesDisplayed={1}
            pageRangeDisplayed={5}
            onPageChange={data => this.handlePageClick(data)}
            containerClassName={'pagination-list'}
            subContainerClassName={'pages pagination'}
            activeClassName={'pagination-active'}
            initialPage={page - 1}
          />
        </div>
        <style jsx>{`
          div {
            border-top: 1px solid ${colors.text.default};
            margin: 30px 0;
          }
        `}</style>
        <style jsx global>{`
          .pagination-list {
            list-style: none;
            padding: 20px 0;
            margin: 0;
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            align-items: center;
          }

          .pagination-list li {
            margin: 5px;
            cursor: pointer;
            border: 1px solid ${colors.ui.default};
            transition: ${animation.fast}ms all ease-out;
          }

          .pagination-list li:not(.disabled):hover {
            background-color: ${colors.ui.default};
            transform: scale(1.1);
          }

          .pagination-list li.disabled {
            opacity: 0.5;
          }

          .pagination-list li a {
            color: ${colors.text.default};
            outline: none;
            padding: 10px 20px;
            display: block;
          }

          .pagination-list li.pagination-break {
            border-color: transparent;
            cursor: auto;
            pointer-events: none;
          }

          .pagination-list li.pagination-break:hover {
            background-color: transparent;
            transform: scale(1);
          }

          .pagination-active {
            background-color: ${colors.ui.default};
          }
        `}</style>
      </>
    );
  }
}

export default Pagination;
