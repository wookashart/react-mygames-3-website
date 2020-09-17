import React from 'react';
import { useRouter } from 'next/router';

// Helpers
import { gamesFilter, urlParameters } from '../../src/utils';

// Components
import GamesPage from '../../src/components/games/GamesPage';

const Games = () => {
  const router = useRouter();
  const filters = gamesFilter();
  const urlParams = urlParameters();

  return <>{router.query.id && <GamesPage pageId={`${router.query.id}`} filters={filters} urlParams={urlParams} />}</>;
};

export default Games;
