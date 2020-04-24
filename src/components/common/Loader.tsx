import React from 'react';

// Helpers
import { colors } from '../../styles/variables';

const Loader = () => {
  return (
    <>
      <div>
        <svg width="150" height="150" viewBox="0 0 100 100">
          <g transform="translate(50 50)">
            <circle x="0" y="0" r="25" className="c1"></circle>
            <circle x="0" y="0" r="20" className="c2"></circle>
          </g>
        </svg>
      </div>
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        svg circle {
          animation-name: rotate;
          animation-duration: 1s;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          fill: transparent;
          stroke-width: 4;
        }

        svg circle..c1 {
          stroke: ${colors.ui.default};
          stroke-dasharray: 90%;
        }

        svg circle.c2 {
          stroke: ${colors.ui.dark};
          stroke-dasharray: 90%;
          transform: rotate(180deg);
          animation-direction: reverse;
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};

export default Loader;
