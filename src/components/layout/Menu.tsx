import React from 'react';

// Config
import { useRouter } from 'next/router';

// Helpers
import { UserData } from '../../content/types/user';

// Components
import MenuTop from './MenuTop';
import MenuBottom from './MenuBottom';

interface MenuProps {
  onLoginOpened: Function;
  onUserLogout: Function;
  userData: UserData;
}

const Menu = ({ onLoginOpened, userData, onUserLogout }: MenuProps) => {
  return (
    <>
      <nav>
        <MenuTop onLoginOpened={onLoginOpened} userData={userData} onUserLogout={onUserLogout} />
        <MenuBottom pathName={useRouter().pathname} />
      </nav>
      <style jsx>{``}</style>
    </>
  );
};

export default Menu;
