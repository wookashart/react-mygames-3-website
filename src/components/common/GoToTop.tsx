import React, { Component } from 'react';

// Helpers
import { colors, animation, breakpoints } from '../../styles/variables';

class GoToTop extends Component {
  state = {
    intervalId: 0,
  };
  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - 50);
  }

  scrollToTop() {
    const intervalId = setInterval(this.scrollStep.bind(this), 10);
    this.setState({ intervalId: intervalId });
  }

  render() {
    return (
      <>
        <button className="go-to-top" onClick={() => this.scrollToTop()}>
          <span></span>
        </button>
        <style jsx>{`
          .go-to-top {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background-color: ${colors.white};
            border: 4px solid ${colors.ui.dark};
            position: relative;
          }

          span {
            display: block;
            transition: ${animation.fast}ms transform ease-out;
          }

          span::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            width: 20px;
            height: 20px;
            transform: rotate(45deg) translate(5px, 5px);
            border: 4px solid ${colors.ui.dark};
            border-right-color: transparent;
            border-bottom-color: transparent;
          }

          .go-to-top:hover span {
            transform: scale(1.1);
          }

          @media screen and (min-width: ${breakpoints.md}px) {
            .go-to-top {
              cursor: pointer;
            }
          }
        `}</style>
      </>
    );
  }
}

export default GoToTop;
