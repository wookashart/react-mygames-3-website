import React from 'react';

// Helpers
import { colors, animation, dimensions } from '../../styles/variables';

// Components
import Link from 'next/link';

interface BreadcrumbsProps {
  pages: PagesList[];
}

interface PagesList {
  title: string;
  url: string;
}

const Breadcrumbs = ({ pages }: BreadcrumbsProps) => (
  <>
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Strona główna</a>
          </Link>
        </li>
        {pages.map((item, index) => (
          <li key={index}>
            <Link href={item.url}>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <style jsx>{`
      div {
        padding: 15px 0;
        border-bottom: 1px solid ${colors.ui.light};
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
      }

      li {
        margin-right: 15px;
      }

      li::after {
        content: '/';
        margin-left: 15px;
        color: ${colors.text.default};
      }

      li:last-of-type::after {
        content: none;
      }

      a {
        text-decoration: none;
        color: ${colors.text.default};
        font-size: ${dimensions.fontSize.small}px;
        transition: ${animation.fast}ms color ease-out;
      }

      a:hover {
        color: ${colors.ui.dark};
      }

      li:last-of-type a {
        color: ${colors.ui.dark};
        font-weight: 600;
      }
    `}</style>
  </>
);

export default Breadcrumbs;
