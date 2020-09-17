import React from 'react';

// Helpers
import { gamesFilter, urlParameters } from '../src/utils';

// Components
import GamesPage from '../src/components/games/GamesPage';

const Games = () => {
  const filters = gamesFilter();
  const urlParams = urlParameters();

  return <GamesPage pageId="1" filters={filters} urlParams={urlParams} />;
};

export default Games;
