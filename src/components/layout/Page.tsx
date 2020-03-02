import React from 'react';
import Menu from './Menu';
import Footer from './Footer';

interface PageProps {
  children: React.ReactElement;
}

const Page = ({ children }: PageProps) => {
  return (
    <>
      <div>
        <Menu />
        {children}
        <Footer />
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default Page;
