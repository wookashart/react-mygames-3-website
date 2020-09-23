import React from 'react';

// Helpers
import { colors, fonts, dimensions, animation } from '../../styles/variables';

interface ButtonProps {
  title: string;
  onButtonClick: Function;
  variant?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ title, variant, onButtonClick, type }: ButtonProps) => {
  return (
    <>
      <button className={variant ? `variant-${variant}` : ''} onClick={() => onButtonClick()} type={type}>
        {title}
      </button>
      <style jsx>{`
        button {
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
        }

        button:hover {
          background-color: ${colors.ui.dark};
        }

        .variant-cancel {
          background-color: transparent;
          border: 1px solid ${colors.text.error};
          color: ${colors.text.error};
        }

        .variant-cancel:hover {
          background-color: ${colors.text.error};
          color: ${colors.white};
        }

        .variant-negative {
          background-color: ${colors.ui.dark};
          border: 1px solid ${colors.ui.dark};
        }

        .variant-negative:hover {
          border: 1px solid ${colors.white};
        }
      `}</style>
    </>
  );
};

export default Button;
