import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './src/graphql/schema.graphql',
  generates: {
    './src/graphql/types.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        contextType: './context#DataSourceContext',
        mappers: {
          Playlist: './models#PlaylistModel',
          Track: './models#TrackModel',
          AddItemsToPlaylistPayload: './models#AddItemsToPlaylistPayloadModel'
        }
      }
    }
  }
};

export default config;
