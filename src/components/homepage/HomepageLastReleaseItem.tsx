import React from 'react';

// Helpers
import { colors, animation, dimensions, breakpoints } from '../../styles/variables';

// Components
import Link from 'next/link';
import CarouselDefault from '../common/CarouselDefault';

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
      <div className="last-release-content">
        <CarouselDefault
          slides={list.map(item => ({
            image: item.cover && item.cover !== '' ? item.cover : '/images/img/no-cover.jpg',
            title: item.title,
            subtitle: dateFormat(item.date, 'dd.mm.yyyy'),
            url: `${url}/${item.id}`,
            id: item.id,
          }))}
        />
      </div>
      <div className="list-related-footer">
        <Link href="premiere-calendar">
          <a>Sprawdź kalendarz</a>
        </Link>
      </div>
    </div>
    <style jsx>{`
      .list-related-footer {
        padding: 5px;
        text-align: right;
      }

      .list-related-footer a {
        text-decoration: none;
        font-size: ${dimensions.fontSize.small}px;
        font-weight: 600;
        color: ${colors.white};
        text-transform: uppercase;
        transition: ${animation.fast}ms color ease-out;
      }

      .list-related-footer a:hover {
        color: ${colors.ui.dark};
      }
    `}</style>
  </>
);

export default HomepageLastRelease;
