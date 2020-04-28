import { Articles } from './articles';

export interface HomepageData {
  latestReleasesGames: HPLatestReleaseGames[];
  latestReleasesDlc: HPLatestReleaseGames[];
  latestUsers: HPLatestUsers[];
  latestArticles: Articles[];
}

export interface HPLatestReleaseGames {
  game_id: number;
  game_title: string;
  game_release_date: string;
  game_cover: string;
}

export interface HPLatestReleaseGames {
  game_title: string;
  dlc_id: number;
  dlc_name: string;
  dlc_date: string;
  dlc_cover: string;
}

export interface HPLatestUsers {
  user_id: number;
  user_login: string;
  user_avatar: string;
  user_gender: 'M' | 'K';
}
