import React, { Component } from 'react';

// Config
import { UserDataContext } from '../src/components/layout/Page';
import { UserData } from '../src/content/types/user';

// Helpers

// Components
import Head from 'next/head';
import Page from '../src/components/layout/Page';
import Wrapper from '../src/components/common/Wrapper';
import Loader from '../src/components/common/Loader';
import Breadcrumbs from '../src/components/common/Breadcrumbs';
import ButtonLink from '../src/components/common/ButtonLink';
import GamesList from '../src/components/common/GamesList';

class Games extends Component {
  state = {
    loading: true,
    data: null,
    error: false,
    listSize: 25,
  };

  onGamesLoad = () => {
    const data = {
      listSize: this.state.listSize,
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
          this.setState({ data: this.gamesList(json), loading: false });
        } else {
          this.setState({ error: true, loading: false });
        }
        console.log(json);
      });
  };

  gamesList = list => {
    return list.games.map(item => ({
      id: item.game_id,
      title: item.game_title,
      platform: item.game_platform,
      cover: item.game_cover && item.game_cover !== '' ? `/images/img/games/${item.game_cover}` : '',
      type: item.game_type,
      ratio: item.countRatio > 0 ? item.sumRatio / item.countRatio : null,
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
                  <div className="page-title">
                    <h1>Gry</h1>
                    {userData && userData.type === 'A' && <ButtonLink title="Dodaj grę" url="/games/add" />}
                  </div>
                  {/* Search + filtry */}
                  {this.state.loading ? <Loader /> : <GamesList url="/game" games={this.state.data} />}

                  {/* Paginacja */}
                </>
              )}
            </UserDataContext.Consumer>
          </Wrapper>
          <style jsx>{``}</style>
        </>
      </Page>
    );
  }
}

export default Games;
