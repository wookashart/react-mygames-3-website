import React from 'react';

// Config
import Link from 'next/link';

// Helpers
import { UserData } from '../../content/types/user';
import { dimensions, colors, animation, other } from '../../styles/variables';

interface MenuTopLoggedProps {
  onUserLogout: Function;
  userData: UserData;
}

const MenuTopLogged = ({ onUserLogout, userData }: MenuTopLoggedProps) => {
  return (
    <>
      <div className="userMenu-wrapper">
        <div>
          Witaj
          <span>{userData.login}</span>
          <span className="userMenu-icon"></span>
          <ul>
            <li>
              <Link href={`/user/profile/${userData.id}`}>
                <a>Mój profil</a>
              </Link>
            </li>
            <li>
              <Link href="/user/profile/edit">
                <a>Edytuj profil</a>
              </Link>
            </li>
            <li>
              <Link href="/user/games/library">
                <a>Moja biblioteka gier</a>
              </Link>
            </li>
            <li>
              <Link href="/user/games/finished">
                <a>Moja ukończone gry</a>
              </Link>
            </li>
            <li>
              <Link href="/user/games/dislike">
                <a>Moja nielubiane gry</a>
              </Link>
            </li>
            {userData.type === 'A' && (
              <li>
                <Link href="/admin">
                  <a>Panel administratora</a>
                </Link>
              </li>
            )}
            <li>
              <Link href="/logout">
                <a onClick={e => onUserLogout(e)}>Wyloguj się</a>
              </Link>
            </li>
          </ul>
          <div className="userMenu-avatar">
            <img
              src={
                userData.avatar !== ''
                  ? userData.avatar
                  : userData.gender === 'M'
                  ? '/images/img/no-avatar-male.png'
                  : '/images/img/no-avatar-female.png'
              }
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .userMenu-wrapper {
          display: inline-block;
          position: relative;
          cursor: pointer;
          padding: 7px 0;
        }

        .userMenu-wrapper > div {
          display: flex;
          align-items: center;
        }

        .userMenu-wrapper:hover ul {
          transform: scaleY(1);
        }

        .userMenu-wrapper:hover span {
          color: ${colors.ui.dark};
        }

        .userMenu-wrapper:hover .userMenu-icon {
          border-right-color: ${colors.ui.dark};
          border-bottom-color: ${colors.ui.dark};
        }

        span {
          margin-left: 10px;
          text-transform: uppercase;
          font-weight: 700;
          font-size: ${dimensions.fontSize.regular}px;
          color: ${colors.ui.default};
          transition: ${animation.fast}ms ease-out;
        }

        ul {
          position: absolute;
          top: 33px;
          right: 0;
          padding: 0;
          list-style: none;
          transform: scaleY(0);
          transform-origin: top;
          background-color: ${colors.ui.dark};
          width: 185px;
          padding: 20px 10px;
          text-align: right;
          transition: ${animation.fast}ms ease-out;
          box-shadow: ${other.shadow.default};
          border-radius: 7px;
          z-index: 99999999;
        }

        li {
          margin: 5px 0;
        }

        a {
          color: ${colors.white};
          transition: ${animation.fast}ms ease-out;
          text-decoration: none;
        }

        a:hover {
          color: ${colors.ui.default};
        }

        .userMenu-avatar {
          width: 35px;
          height: 35px;
          margin-left: 10px;
          position: relative;
        }

        .userMenu-avatar img {
          max-width: 100%;
          max-height: 100%;
          vertical-align: middle;
          box-shadow: ${other.shadow.default};
          border-radius: 50%;
        }

        .userMenu-icon {
          width: 10px;
          height: 10px;
          border: 2px solid ${colors.ui.default};
          border-left-color: transparent;
          border-top-color: transparent;
          transform: translateY(-4px) rotate(45deg);
          transition: ${animation.fast}ms ease-out;
        }
      `}</style>
    </>
  );
};

export default MenuTopLogged;
