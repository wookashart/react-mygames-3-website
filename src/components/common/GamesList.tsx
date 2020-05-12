import React from 'react';

// Helpers
import { colors, animation, dimensions } from '../../styles/variables';

// Components
import Link from 'next/link';

interface GamesListProps {
  games: Games[];
  url: string;
}

interface Games {
  id: number;
  title: string;
  platform: string;
  cover: string;
  type: string;
  ratio?: number;
}

const GamesList = ({ games, url }: GamesListProps) => {
  console.log(games);

  return (
    <>
      <ul>
        {games.map(item => (
          <li key={item.id}>
            <Link href={`${url}/${item.id}`}>
              <a>
                {item.ratio && (
                  <span className="tile-ratio">
                    <span>{item.ratio}</span>
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor">
                      <path d="M19.064 10.109l1.179-2.387a.5.5 0 0 0-.416-.72l-2.656-.172-.172-2.656a.5.5 0 0 0-.721-.416l-2.385 1.18-1.477-2.215c-.186-.278-.646-.278-.832 0l-1.477 2.215-2.385-1.18a.5.5 0 0 0-.721.416L6.83 6.83l-2.657.171a.5.5 0 0 0-.416.721l1.179 2.386-2.214 1.477a.501.501 0 0 0 0 .832l2.215 1.477-1.18 2.386a.498.498 0 0 0 .416.72l2.656.171L7 19.828a.5.5 0 0 0 .721.416l2.386-1.179 1.477 2.214a.501.501 0 0 0 .832 0l1.477-2.214 2.386 1.179a.5.5 0 0 0 .721-.416l.171-2.656L19.827 17a.5.5 0 0 0 .416-.721l-1.179-2.385 2.214-1.478a.501.501 0 0 0 0-.832l-2.214-1.475z"></path>
                    </svg>
                  </span>
                )}
                <span className="tile-image">
                  <img src={item.cover} />
                </span>
                <span className="tile-content">
                  <span className="tile-content-title">{item.title}</span>
                </span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-flow: row wrap;
          width: calc(100% + 30px);
          margin-left: -15px;
        }

        li {
          position: relative;
          width: calc((100% / 5) - 30px);
          margin: 15px;
          border: 1px solid ${colors.ui.default};
          padding: 10px;
        }

        a {
          text-decoration: none;
        }

        img {
          max-width: 150px;
          max-height: 100%;
        }

        .tile-image {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 180px;
        }

        .tile-content {
          display: block;
          margin-top: 10px;
          text-align: center;
        }

        .tile-content-title {
          text-decoration: none;
          text-transform: uppercase;
          font-size: ${dimensions.fontSize.large}px;
          color: ${colors.ui.default};
        }

        .tile-ratio {
          position: absolute;
          top: -40px;
          right: -35px;
          z-index: 5;
          width: 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tile-ratio span {
          position: relative;
          z-index: 10;
          font-size: 30px;
          font-weight: 600;
          color: ${colors.ui.dark};
        }

        svg {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          color: #dcdcdc;
          max-height: 100%;
        }
      `}</style>
    </>
  );
};

export default GamesList;
