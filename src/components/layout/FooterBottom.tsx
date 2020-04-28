import React from 'react';

// Helpers
import { colors, animation, dimensions, breakpoints } from '../../styles/variables';

// Config
import dateFormat from 'dateformat';

// Components
import Link from 'next/link';

const FooterBottom = () => (
  <>
    <div className="footer-bottom-wrapper">
      <p>@{dateFormat(new Date(), 'yyyy')} Łukasz Krawczyk Software Development</p>
      <ul>
        <li>
          <Link href="/regulation">
            <a>Regulamin</a>
          </Link>
        </li>
        <li>
          <Link href="/privacy-poclicy">
            <a>Polityka prywatności</a>
          </Link>
        </li>
      </ul>
    </div>
    <style jsx>{`
      .footer-bottom-wrapper {
        display: flex;
        flex-flow: column-reverse;
        align-items: center;
        padding: 15px 0;
      }

      p {
        margin: 0;
        margin-top: 15px;
        color: ${colors.white};
        font-size: ${dimensions.fontSize.small}px;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-flow: column;
      }

      li {
        text-align: center;
        margin-bottom: 10px;
      }

      a {
        color: ${colors.white};
        text-decoration: none;
        transition: ${animation.fast}ms color ease-out;
      }

      a:hover {
        color: ${colors.ui.dark};
      }

      @media screen and (min-width: ${breakpoints.md}px) {
        .footer-bottom-wrapper {
          flex-flow: row;
          justify-content: space-between;
        }

        ul {
          flex-flow: row;
        }

        li {
          text-align: right;
          margin-left: 15px;
          margin-bottom: 0;
        }

        p {
          margin-top: 0;
        }
      }
    `}</style>
  </>
);

export default FooterBottom;
