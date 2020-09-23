import React, { Component } from 'react';

// Config
import { UserDataContext } from '../layout/Page';
import { UserData } from '../../content/types/user';
import { GameFiltersData } from '../../content/types/filters';

// Helpers
import { breakpoints, colors, dimensions } from '../../styles/variables';

// Components
import Head from 'next/head';
import Page from '../layout/Page';
import Wrapper from '../common/Wrapper';
import Loader from '../common/Loader';
import Breadcrumbs from '../common/Breadcrumbs';
import ButtonLink from '../common/ButtonLink';
import Pagination from '../common/Pagination';
import GamesList from '../games/GamesList';
import GamesFilters from '../games/GamesFilters';

interface GamesPageProps {
  pageId: string;
  filters: GameFiltersData;
  urlParams?: string;
}

class GamesPage extends Component<GamesPageProps> {
  state = {
    loading: true,
    data: null,
    error: false,
    listSize: 25,
  };

  onGamesLoad = (selectedPage?: number) => {
    const data = {
      listSize: this.state.listSize,
      page: selectedPage ? selectedPage : this.props.pageId,
      filters: this.props.filters,
    };

    this.setState({ loading: true }, () => {
      fetch('/api/gamesList', {
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
        method: 'POST',
        credentials: 'include',
      })
        .then(response => response.json())
        .then(json => {
          if (json && !json.error) {
            this.setState({ data: json, loading: false });
          } else {
            this.setState({ error: true, loading: false });
          }
        });
    });
  };

  gamesList = list => {
    return list.map(item => ({
      id: item.game_id,
      title: item.game_title,
      titlePl: item.game_title_pl,
      platform: item.game_platform,
      cover: item.game_cover && item.game_cover !== '' ? `/images/img/games/${item.game_cover}` : '',
      type: item.game_type,
      date: item.game_release_date,
      producer: item.game_producer,
      ratio: item.countRatio > 0 ? item.sumRatio / item.countRatio : null,
      countRatio: item.countRatio,
    }));
  };

  componentDidMount() {
    this.onGamesLoad();
  }

  render() {
    return (
      <Page>
        <>
          <Head>
            <title>Lista gier | MyGames</title>
          </Head>
          <Wrapper>
            <UserDataContext.Consumer>
              {(userData: UserData) => (
                <>
                  <Breadcrumbs pages={[{ title: 'Gry', url: '/games' }]} />
                  {this.state.loading ? (
                    <Loader />
                  ) : (
                    <>
                      <div className="page-title">
                        <div className="page-title-informations">
                          <p>
                            Wszystkich pozycji: <span className="highlighted-info">{this.state.data.totalCount}</span>
                          </p>
                          {Object.keys(this.props.filters).length > 0 ? (
                            <p>
                              Znaleziono: <span className="highlighted-info">{this.state.data.filteredCount}</span>
                              {this.props.filters.title && this.props.filters.title !== '' ? (
                                <span>
                                  {' '}
                                  dla szukanego hasła:{' '}
                                  <span className="highlighted-info">{this.props.filters.title}</span>
                                </span>
                              ) : (
                                <span> dla wybranych filtrów</span>
                              )}
                            </p>
                          ) : null}
                        </div>
                        {userData && userData.type === 'A' && <ButtonLink title="Dodaj grę" url="/games/add" />}
                      </div>
                      <div className="games-content">
                        <div>
                          <GamesList
                            url="/game"
                            games={this.state.data.games ? this.gamesList(this.state.data.games) : []}
                          />
                        </div>
                        <div>
                          <GamesFilters
                            producers={this.state.data.producers}
                            publishers={this.state.data.publishers}
                            platforms={this.state.data.platforms}
                            handleRefreshData={this.onGamesLoad}
                          />
                        </div>
                      </div>
                      <Pagination
                        page={Number(this.props.pageId)}
                        url="/games"
                        maxPages={Math.ceil(this.state.data.filteredCount / this.state.listSize)}
                        urlParams={this.props.urlParams}
                        handleRefreshData={this.onGamesLoad}
                      />
                    </>
                  )}
                </>
              )}
            </UserDataContext.Consumer>
          </Wrapper>
          <style jsx>{`
            .games-content {
              display: flex;
              flex-flow: column-reverse;
            }

            .highlighted-info {
              color: ${colors.ui.dark};
              font-weight: 600;
              font-size: ${dimensions.fontSize.large}px;
            }

            .page-title-informations {
              padding: 20px 0;
            }

            .page-title-informations p {
              margin: 0;
            }

            @media screen and (min-width: ${breakpoints.lg}px) {
              .games-content {
                flex-flow: row;
              }

              .games-content div:nth-of-type(1) {
                flex: 1;
              }
            }
          `}</style>
        </>
      </Page>
    );
  }
}

export default GamesPage;
