import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// Components
import Wrapper from '../common/Wrapper';
import TitleLine from '../common/TitleLine';
import HomepageLastReleaseItem from './HomepageLastReleaseItem';

// Config
import { HomepageData } from '../../content/types/homepage';

// Helpers
import { animation, breakpoints, colors, dimensions } from '../../styles/variables';

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
        <div className="homepage-last-release-wrapper">
          <Wrapper>
            <>
              <TitleLine title="Ostatnie premiery" backgroundColor={colors.ui.default} />

              <Tabs className="last-release-tabs">
                <TabList className="last-release-tabs-list">
                  <Tab className="last-release-tabs-item">Gry</Tab>
                  <Tab className="last-release-tabs-item">Dodatki</Tab>
                </TabList>

                <TabPanel className="last-release-tabs-panel">
                  <HomepageLastReleaseItem title="Ostatnie premiery gier" url="/game" list={this.latestGames()} />
                </TabPanel>
                <TabPanel className="last-release-tabs-panel">
                  <HomepageLastReleaseItem title="Ostatnie premiery dodatków" url="/dlc" list={this.latestDlc()} />
                </TabPanel>
              </Tabs>
            </>
          </Wrapper>
        </div>
        <style jsx>{`
          .homepage-last-release-wrapper {
            background-color: ${colors.ui.default};
            padding: 15px 0;
          }
        `}</style>
        <style jsx global>{`
          .last-release-tabs {
            display: flex;
            flex-flow: column;
          }

          .last-release-tabs-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-flow: row;
            justify-content: center;
          }

          .last-release-tabs-item {
            margin: 10px;
            text-align: center;
            padding: 10px 15px;
            font-size: ${dimensions.fontSize.large}px;
            text-transform: uppercase;
            color: ${colors.white};
            background-color: ${colors.ui.dark};
            cursor: pointer;
            border: 1px solid ${colors.ui.dark};
            border-radius: 0;
            outline: none;
            transition: ${animation.fast}ms border ease-out;
          }

          .last-release-tabs-item:hover {
            border: 1px solid ${colors.white};
          }

          .last-release-tabs-item.react-tabs__tab--selected {
            border: 1px solid ${colors.white};
          }

          @media screen and (min-width: ${breakpoints.md}px) {
            .last-release-tabs {
              flex-flow: row;
            }

            .last-release-tabs-list {
              width: 120px;
              flex-flow: column;
              justify-content: flex-start;
            }

            .last-release-tabs-item {
              margin: 10px 0;
            }

            .last-release-tabs-panel {
              width: calc(100% - 120px);
              margin-left: 25px;
              opacity: 0;
              transition: ${animation.fast}ms opacity ease-out;
              transition-delay: ${animation.subtle}ms;
            }

            .last-release-tabs-panel.react-tabs__tab-panel--selected {
              opacity: 1;
            }
          }
        `}</style>
      </>
    );
  }
}

export default HomepageLastRelease;
