import React from 'react';
import dateFormat from 'dateformat';

// Helpers
import { colors, animation, dimensions, breakpoints } from '../../styles/variables';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// Components
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface GamesListProps {
  games: Games[];
  url: string;
}

interface Games {
  id: number;
  title: string;
  titlePl: string;
  platform: string;
  cover: string;
  type: string;
  ratio?: number;
  date: string;
  producer: string;
  countRatio: number;
}

const setPlatforms = (platform: string) => platform.split(' / ');

const GamesList = ({ games, url }: GamesListProps) => {
  return (
    <>
      <ul>
        {games.map(item => (
          <li key={item.id}>
            <Link href={`${url}/${item.id}`}>
              <a>
                <span className="game-image" style={{ backgroundImage: `url(${item.cover})` }} />
                <span className="game-content">
                  <span className="game-content-title">{item.title}</span>
                  <span className="game-content-subtitle">{item.titlePl}</span>
                  <span className="game-content-platforms">
                    {setPlatforms(item.platform).map(item => (
                      <span key={item}>{item}</span>
                    ))}
                  </span>
                  <span className="game-content-other">
                    <span>{item.producer}</span>
                    <span>&#9679;</span>
                    <span>
                      {item.date && item.date !== '0000-00-00' ? dateFormat(item.date, 'dd.mm.yyyy') : 'brak daty'}
                    </span>
                  </span>
                </span>
                <span className="game-ratio">
                  {item.ratio ? (
                    <>
                      <span>
                        <FontAwesomeIcon className="ratio-star" icon={faStar} />
                        {item.ratio}
                      </span>
                      <span>wystawionych ocen: {item.countRatio}</span>
                    </>
                  ) : (
                    <span className="game-no-ratio">Brak ocen</span>
                  )}
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
        }

        a {
          display: flex;
          flex-flow: column;
          align-items: center;
          text-decoration: none;
          position: relative;
          margin: 5px 0;
          border: 1px solid ${colors.ui.default};
          padding: 10px;
          color: ${colors.text.default};
        }

        .game-image {
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          display: block;
          height: 220px;
          width: 170px;
          margin-bottom: 15px;
        }

        .game-content {
          padding: 0 30px;
          flex: 1;
          display: flex;
          flex-flow: column;
        }

        .game-content-title {
          font-size: ${dimensions.fontSize.xxl}px;
          font-weight: 600;
          text-align: center;
        }

        .game-content-subtitle {
          font-size: ${dimensions.fontSize.regular}px;
          font-style: italic;
          text-align: center;
        }

        .game-content-platforms {
          margin-left: -3px;
        }

        .game-content-platforms span {
          display: inline-block;
          margin: 10px 3px;
          padding: 5px 10px;
          background-color: ${colors.ui.default};
          color: ${colors.white};
        }

        .game-content-other {
          font-size: ${dimensions.fontSize.small}px;
          color: ${colors.text.gray};
          margin-left: -3px;
        }

        .game-content-other span {
          display: inline-block;
          margin: 0 3px;
        }

        .game-ratio {
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
          width: 150px;
          margin: 15px 0;
        }

        .game-ratio span:nth-of-type(1) {
          font-size: 30px;
          font-weight: 600;
          display: flex;
          align-items: center;
        }

        .game-ratio span:nth-of-type(2) {
          font-size: ${dimensions.fontSize.smaller}px;
          color: ${colors.text.gray};
          margin-top: 10px;
        }

        .game-ratio span.game-no-ratio {
          font-weight: 400;
          color: ${colors.text.gray};
          font-size: ${dimensions.fontSize.xxl}px;
        }

        @media screen and (min-width: ${breakpoints.md}px) {
          a {
            flex-flow: row;
            position: relative;
            background-color: ${colors.white};
            transition: ${animation.fast}ms background-color ease-out;
          }

          a::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: ${colors.ui.default};
            z-index: -1;
            transition: ${animation.fast}ms transform ease-out;
          }

          a:hover {
            background-color: ${colors.ui.light};
          }

          a:hover::after {
            transform: translate(3px, 3px);
          }

          .game-image {
            height: 120px;
            width: 90px;
            margin-bottom: 0;
          }

          .game-content-title,
          .game-content-subtitle {
            text-align: left;
          }

          .game-ratio {
            margin: 0;
          }
        }
      `}</style>
      <style jsx global>{`
        .ratio-star {
          width: 30px;
          height: 30px;
          color: ${colors.star};
          margin-right: 5px;
        }
      `}</style>
    </>
  );
};

export default GamesList;
