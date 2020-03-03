import React from 'react';

// Helpers
import { colors, breakpoints } from '../../styles/variables';

interface MenuHamburgerProps {
  onHamburgerClick: Function;
}

const MenuHamburger = ({ onHamburgerClick }: MenuHamburgerProps) => {
  return (
    <>
      <div onClick={() => onHamburgerClick(true)}>
        <div></div>
      </div>
      <style jsx>{`
        div {
          height: 54px;
          display: flex;
          align-items: center;
        }

        div > div {
          position: relative;
          width: 40px;
          height: 30px;
          border-top: 5px solid ${colors.white};
          border-bottom: 5px solid ${colors.white};
        }

        div > div::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          height: 5px;
          margin: auto;
          background-color: ${colors.white};
        }

        @media screen and (min-width: ${breakpoints.md}px) {
          div {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default MenuHamburger;
