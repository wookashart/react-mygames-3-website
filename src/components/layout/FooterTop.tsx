import React from 'react';

// Helpers
import { colors, animation, dimensions, breakpoints } from '../../styles/variables';

// Components
import Link from 'next/link';
import GoToTop from '../common/GoToTop';

const FooterTop = () => (
  <>
    <div className="footer-top-wrapper">
      <div className="footer-go-to-top">
        <GoToTop />
      </div>
      <ul className="footer-top-list">
        <li>
          <Link href="/games">
            <a>Gry</a>
          </Link>
        </li>
        <li>
          <Link href="/articles">
            <a>Recenzje</a>
          </Link>
        </li>
        <li>
          <Link href="/helpers">
            <a>Poradniki</a>
          </Link>
        </li>
      </ul>
      <ul className="footer-top-list">
        <li>
          <Link href="/contact">
            <a>Kontakt</a>
          </Link>
        </li>
      </ul>
    </div>
    <style jsx>{`
      .footer-top-wrapper {
        display: flex;
        justify-content: center;
        flex-flow: column;
        padding-top: 30px;
        padding-bottom: 15px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.4);
        position: relative;
      }

      .footer-top-wrapper::after {
        content: '';
        height: 4px;
        width: calc(100% + 20px);
        position: absolute;
        background-image: linear-gradient(
          to right,
          rgba(255, 255, 255, 0) 0%,
          rgba(0, 6, 27, 0.3) 20%,
          rgba(0, 6, 27, 0.3) 80%,
          rgba(255, 255, 255, 0) 100%
        );
        top: 0;
        left: -10px;
        z-index: 5;
      }

      .footer-top-list {
        list-style: none;
        padding: 0;
        margin: 0;
        margin-top: -10px;
      }

      li {
        margin: 10px 0;
        text-align: center;
      }

      a {
        text-decoration: none;
        font-size: ${dimensions.fontSize.large};
        text-transform: uppercase;
        color: ${colors.white};
        transition: ${animation.fast}ms color ease-out;
      }

      a:hover {
        color: ${colors.ui.dark};
      }

      .footer-go-to-top {
        position: absolute;
        top: -40px;
        right: 0;
        z-index: 10;
      }

      @media screen and (min-width: ${breakpoints.md}px) {
        .footer-top-wrapper {
          justify-content: flex-start;
          flex-flow: row;
        }

        .footer-top-list {
          width: 300px;
          margin-top: 0;
        }

        li {
          text-align: left;
          margin: 5px 0;
        }

        .footer-go-to-top {
          right: 100px;
        }
      }
    `}</style>
  </>
);

export default FooterTop;
