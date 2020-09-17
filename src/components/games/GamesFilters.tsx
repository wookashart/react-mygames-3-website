import React, { Component } from 'react';

// Helpers
import { colors, animation, dimensions, breakpoints } from '../../styles/variables';

// Components
import TitleLine from '../common/TitleLine';

class GamesFilters extends Component {
  render() {
    return (
      <>
        <div className="filters-wrapper">
          <div>
            <TitleLine title="Wyszukaj" backgroundColor={colors.ui.default} />
          </div>
          <div>
            <TitleLine title="Filtry" backgroundColor={colors.ui.default} />
          </div>
        </div>
        <style jsx>{`
          .filters-wrapper {
            background-color: ${colors.ui.default};
            width: 100%;
            padding: 10px;
          }

          @media screen and (min-width: ${breakpoints.lg}px) {
            .filters-wrapper {
              width: 350px;
              margin: 5px;
              margin-left: 15px;
            }
          }
        `}</style>
      </>
    );
  }
}

export default GamesFilters;
