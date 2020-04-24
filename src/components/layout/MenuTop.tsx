import React from 'react';

// Config

// Helpers
import { colors, animation } from '../../styles/variables';
import { UserData } from '../../content/types/user';

// Components
import Wrapper from '../common/Wrapper';
import MenuTopLogged from './MenuTopLogged';
import Link from 'next/link';

interface MenuTopProps {
  onLoginOpened: Function;
  onUserLogout: Function;
  userData: UserData;
}

const MenuTop = ({ onLoginOpened, userData, onUserLogout }: MenuTopProps) => {
  return (
    <>
      <Wrapper>
        <div>
          {!userData ? (
            <ul>
              <li>
                <Link href="/login">
                  <a onClick={e => onLoginOpened(e)}>Logowanie</a>
                </Link>
              </li>
              <li>
                <Link href="/register">
                  <a>Rejestracja</a>
                </Link>
              </li>
            </ul>
          ) : (
            <MenuTopLogged onUserLogout={onUserLogout} userData={userData} />
          )}
        </div>
      </Wrapper>
      <style jsx>{`
        div {
          display: flex;
          justify-content: flex-end;
        }

        ul {
          display: flex;
          list-style: none;
          padding: 15px 0;
          margin: 0;
        }

        li {
          padding-left: 15px;
        }

        a {
          text-decoration: none;
          text-transform: uppercase;
          color: ${colors.text.default};
          transition: ease-out color ${animation.fast}ms;
        }

        a:hover {
          color: ${colors.ui.dark};
        }
      `}</style>
    </>
  );
};

export default MenuTop;
