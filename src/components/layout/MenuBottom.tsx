import React, { Component } from 'react';

// Config
import Link from 'next/link';

// Helpers
import { colors, fonts, animation, breakpoints, dimensions } from '../../styles/variables';

// Components
import Wrapper from '../common/Wrapper';
import Hamburger from './MenuHamburger';

interface MenuBottomProps {
  pathName: string;
}

class MenuBottom extends Component<MenuBottomProps> {
  state = {
    hamburgerOpened: false,
  };

  onHamburgerClick = (opened: boolean) => this.setState({ hamburgerOpened: opened });

  render() {
    return (
      <>
        <div>
          <Wrapper>
            <>
              <Hamburger onHamburgerClick={this.onHamburgerClick} />
              <ul className={this.state.hamburgerOpened ? 'is-open' : ''}>
                <li className={this.props.pathName === '/' ? 'active' : ''}>
                  <Link href="/">
                    <a>Strona główna</a>
                  </Link>
                </li>
                <li className={this.props.pathName === '/games' ? 'active' : ''}>
                  <Link href="/games">
                    <a>Gry</a>
                  </Link>
                </li>
                <li className={this.props.pathName === '/articles' ? 'active' : ''}>
                  <Link href="/articles">
                    <a>Recenzje</a>
                  </Link>
                </li>
                <li className={this.props.pathName === '/helpers' ? 'active' : ''}>
                  <Link href="/helpers">
                    <a>Poradniki</a>
                  </Link>
                </li>
                <li className={this.props.pathName === '/contact' ? 'active' : ''}>
                  <Link href="/contact">
                    <a>Kontakt</a>
                  </Link>
                </li>

                <li className="close" onClick={() => this.onHamburgerClick(false)}>
                  <button>zamknij</button>
                </li>
              </ul>
            </>
          </Wrapper>
        </div>
        <style jsx>{`
          div {
            position: relative;
            background-color: ${colors.ui.default};
          }

          div::after {
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
            bottom: 0;
            left: -10px;
            z-index: 5;
          }

          ul {
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
            list-style: none;
            padding: 0;
            margin: 0;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: ${colors.ui.default};
            transform: ${this.state.hamburgerOpened ? 'translateX(0)' : 'translateX(-100%)'};
            transition: ease-out transform ${animation.fast}ms;
            z-index: 100;
          }

          li {
            width: 100%;
            text-align: center;
          }

          li.active > a {
            background-color: ${colors.ui.dark};
          }

          li.close {
            position: absolute;
            top: 20px;
            right: 20px;
            width: auto;
          }

          li.close > button {
            background: transparent;
            font-size: ${dimensions.fontSize.small}px;
            color: ${colors.white};
            text-transform: uppercase;
            border: none;
          }

          a {
            display: block;
            padding: 15px 20px;
            text-decoration: none;
            text-transform: uppercase;
            color: ${colors.white};
            font-family: ${fonts.header};
          }

          @media screen and (min-width: ${breakpoints.md}px) {
            ul {
              flex-flow: row;
              justify-content: flex-start;
              position: relative;
              transform: none;
              transition: all 0ms;
              z-index: 1;
              background-color: transparent;
            }

            li {
              width: auto;
            }

            li.close {
              display: none;
            }

            a {
              transition: ease-out background ${animation.fast}ms;
            }

            a:hover {
              background-color: ${colors.ui.dark};
            }
          }
        `}</style>
      </>
    );
  }
}

export default MenuBottom;
