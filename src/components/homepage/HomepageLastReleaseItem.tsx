import React from 'react';

// Helpers
import { colors, animation, dimensions, breakpoints } from '../../styles/variables';

// Components
import Link from 'next/link';

// Config
import dateFormat from 'dateformat';

interface HomepageLastReleaseProps {
  title: string;
  url: string;
  list: LastReleaseList[];
}

interface LastReleaseList {
  title: string;
  id: number;
  cover: string;
  date: string;
}

const HomepageLastRelease = ({ title, url, list }: HomepageLastReleaseProps) => (
  <>
    <div className="last-release-wrapper">
      <div className="last-release-title">
        <h3>{title}</h3>
      </div>
      <div className="last-release-content">
        <ul>
          {list.map(item => (
            <li key={item.id}>
              <Link href={`${url}/${item.id}`}>
                <a>
                  <span className="last-release-cover">
                    <img src={item.cover && item.cover !== '' ? item.cover : '/images/img/no-cover.jpg'} />
                  </span>
                  <span className="last-release-game">
                    <span>{item.title}</span>
                    <span>({dateFormat(item.date, 'dd.mm.yyyy')})</span>
                  </span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="list-related-footer">
        <Link href="#">
          <a>Zobacz więcej</a>
        </Link>
      </div>
    </div>
    <style jsx>{`
      .last-release-wrapper {
        margin: 15px 0;
        border: 1px solid ${colors.ui.default};
        padding-bottom: 50px;
        position: relative;
      }

      .last-release-title {
        background-color: ${colors.ui.default};
        padding: 15px;
      }

      .last-release-title h3 {
        margin: 0;
        color: ${colors.white};
      }

      .last-release-content {
        padding: 0 15px;
      }

      .last-release-content > ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .last-release-content li {
        margin: 15px 0;
      }

      .last-release-content a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: ${colors.text.default};
        font-weight: 600;
        transition: ${animation.fast}ms color ease-out;
      }

      .last-release-content a:hover {
        color: ${colors.ui.dark};
      }

      .last-release-cover {
        position: relative;
        height: 80px;
        width: 60px;
        display: flex;
        align-items: center;
      }

      .last-release-cover img {
        max-height: 80px;
        max-width: 60px;
        margin-right: 15px;
      }

      .last-release-cover img::before {
        content: 'image not found';
        font-size: ${dimensions.fontSize.small}px;
        font-weight: 400;
        color: ${colors.ui.default};
        display: inline-block;
        background-color: ${colors.white};
        padding: 10px;
        text-align: center;
        border: 1px dashed ${colors.ui.default};
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
      }

      .list-related-footer {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        border-top: 1px solid ${colors.ui.default};
        padding: 15px;
        text-align: right;
      }

      .list-related-footer a {
        text-decoration: none;
        font-size: ${dimensions.fontSize.small}px;
        font-weight: 600;
        color: ${colors.ui.default};
        text-transform: uppercase;
        transition: ${animation.fast}ms color ease-out;
      }

      .list-related-footer a:hover {
        color: ${colors.ui.dark};
      }

      .last-release-game {
        font-size: ${dimensions.fontSize.large}px;
        margin-left: 15px;
      }

      .last-release-game span:last-of-type {
        font-size: ${dimensions.fontSize.regular}px;
        margin-left: 10px;
        font-weight: 400;
        font-style: italic;
      }

      @media screen and (min-width: ${breakpoints.md}px) {
        .last-release-wrapper {
          flex: 1;
          margin: 30px 15px;
          padding-bottom: 60px;
        }
      }
    `}</style>
  </>
);

export default HomepageLastRelease;
