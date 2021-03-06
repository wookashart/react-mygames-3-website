import React from 'react';

// Helpers
import { colors, fonts, animation, dimensions } from '../../styles/variables';

// Components
import Link from 'next/link';

interface ButtonLinkProps {
  title: string;
  url: string;
  variant?: string;
}

const ButtonLink = ({ title, url, variant }: ButtonLinkProps) => {
  return (
    <>
      <Link href={url}>
        <a className={variant ? `variant-${variant}` : ''}>{title}</a>
      </Link>
      <style jsx>{`
        a {
          border: none;
          background-color: ${colors.ui.default};
          display: block;
          margin: 0 10px;
          padding: 10px 30px;
          border-radius: 3px;
          cursor: pointer;
          color: ${colors.white};
          font-family: ${fonts.header};
          font-size: ${dimensions.fontSize.regular}px;
          transition: ease-out all ${animation.fast}ms;
          text-decoration: none;
        }

        a:hover {
          background-color: ${colors.ui.dark};
        }

        .variant-active {
          background-color: ${colors.ui.dark};
        }
      `}</style>
    </>
  );
};

export default ButtonLink;
