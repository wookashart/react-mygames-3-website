import React, { Component } from 'react';

// Config
import { UserDataContext } from '../layout/Page';
import { UserData } from '../../content/types/user';
import { GameFiltersData } from '../../content/types/filters';

// Helpers
import { breakpoints } from '../../styles/variables';

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

import Link from 'next/link';

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

  onGamesLoad = () => {
    const data = {
      listSize: this.state.listSize,
      page: this.props.pageId,
      filters: this.props.filters,
    };

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
                  <Breadcrumbs pages={[{ title: 'Gry', url: '/games/1' }]} />
                  {this.state.loading ? (
                    <Loader />
                  ) : (
                    <>
                      <div className="page-title">
                        <h1>Gry</h1>
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
                          <GamesFilters />
                        </div>
                      </div>
                      <Pagination
                        page={Number(this.props.pageId)}
                        url="/games"
                        maxPages={Math.ceil(this.state.data.filteredCount / this.state.listSize)}
                        urlParams={this.props.urlParams}
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
