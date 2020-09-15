import React from 'react';

// Helpers
import { colors, animation, dimensions } from '../../styles/variables';

interface TitleLineProps {
  title: string;
  backgroundColor: string;
}

const TitleLine = ({ title, backgroundColor }: TitleLineProps) => (
  <>
    <div>
      <div className="title-line">
        <h3>{title}</h3>
      </div>
    </div>
    <style jsx>{`
      .title-line {
        margin-bottom: 10px;
        position: relative;
        text-align: center;
      }

      .title-line h3 {
        margin: 0;
        color: ${colors.text.default};
        display: inline-block;
        background-color: ${backgroundColor};
        padding: 0 15px;
        position: relative;
        z-index: 1;
      }

      .title-line::after {
        content: '';
        position: absolute;
        right: 0;
        left: 0;
        top: 2px;
        bottom: 0;
        margin: auto;
        height: 1px;
        background-color: ${colors.text.default};
      }
    `}</style>
  </>
);

export default TitleLine;
