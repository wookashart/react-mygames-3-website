import React from 'react';

// Components
import MenuTop from './MenuTop';
import MenuBottom from './MenuBottom';

interface MenuProps {
  pathName: string;
}

const Menu = (props: MenuProps) => {
  return (
    <>
      <nav>
        <MenuTop />
        <MenuBottom {...props} />
      </nav>
      <style jsx>{``}</style>
    </>
  );
};

export default Menu;
