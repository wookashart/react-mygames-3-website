import React from 'react';

// Helpers
import { dimensions } from '../../styles/variables';

interface WrapperProps {
  children: React.ReactElement;
  className?: string;
}

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <>
      <div className={className}>{children}</div>
      <style jsx>{`
        div {
          max-width: ${dimensions.wrapper}px;
          margin: auto;
          padding: 0 15px;
        }
      `}</style>
    </>
  );
};

export default Wrapper;
