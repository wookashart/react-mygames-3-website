import React from 'react';

// Helpers
import { colors, animation } from '../../styles/variables';

// Components
import Wrapper from '../common/Wrapper';
// import Link from 'next/link';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';

const Footer = () => (
  <>
    <div className="footer-wrapper">
      <Wrapper>
        <>
          <FooterTop />
          <FooterBottom />
        </>
      </Wrapper>
    </div>
    <style jsx>{`
      .footer-wrapper {
        background-color: ${colors.ui.default};
      }
    `}</style>
  </>
);

export default Footer;
