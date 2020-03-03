import React from 'react';

// Config
import Head from 'next/head';
import { useRouter } from 'next/router';

// Helpers
import { dimensions, colors, fonts } from '../../styles/variables';

// Components
import Menu from './Menu';
import Footer from './Footer';

interface PageProps {
  children: React.ReactElement;
}

const Page = ({ children }: PageProps) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Oswald:400,500,700|Roboto:400,400i,500,500i,700,700i&amp;subset=latin-ext"
          rel="stylesheet"
        ></link>
      </Head>
      <div>
        <Menu pathName={useRouter().pathname} />
        {children}
        <Footer />
      </div>
      <style jsx global>{`
        * {
          box-sizing: border-box;
          font-family: ${fonts.header};
        }

        html,
        body {
          margin: 0;
          padding: 0;
          font-size: ${dimensions.fontSize.regular}px;
          color: ${colors.text.default};
        }
      `}</style>
    </>
  );
};

export default Page;
