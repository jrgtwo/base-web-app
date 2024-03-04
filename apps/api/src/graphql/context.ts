import type { SpotifyAPI } from './datasources/spotify-api.js';

export type DataSourceContext = {
  dataSources: {
    spotifyAPI: SpotifyAPI;
  };
};
