import React, { Component } from 'react';

// Components
import HomepageLastReleaseItem from './HomepageLastReleaseItem';

// Config
import { HomepageData } from '../../content/types/homepage';

// Helpers
import { breakpoints } from '../../styles/variables';

interface HomepageLastReleaseProps {
  data: HomepageData;
}

class HomepageLastRelease extends Component<HomepageLastReleaseProps> {
  latestGames = () => {
    return this.props.data.latestReleasesGames.map(game => ({
      title: game.game_title,
      id: game.game_id,
      cover: game.game_cover && game.game_cover !== '' ? `/images/img/games/${game.game_cover}` : '',
      date: game.game_release_date,
    }));
  };

  latestDlc = () => {
    return this.props.data.latestReleasesDlc.map(game => ({
      title: `${game.game_title} - ${game.dlc_name}`,
      id: game.dlc_id,
      cover: game.dlc_cover && game.dlc_cover !== '' ? `/images/img/dlc/${game.dlc_cover}` : '',
      date: game.dlc_date,
    }));
  };

  render() {
    return (
      <>
        <div className="homepage-last-release">
          <HomepageLastReleaseItem title="Ostatnie premiery gier" url="/game" list={this.latestGames()} />
          <HomepageLastReleaseItem title="Ostatnie premiery dodatków" url="/dlc" list={this.latestDlc()} />
        </div>
        <style jsx>{`
          .homepage-last-release {
            display: flex;
            flex-flow: column;
            margin: 15px 0;
          }

          @media screen and (min-width: ${breakpoints.md}px) {
            .homepage-last-release {
              flex-flow: row;
              margin: 0;
              margin-left: -15px;
              width: calc(100% + 30px);
            }
          }
        `}</style>
      </>
    );
  }
}

export default HomepageLastRelease;
