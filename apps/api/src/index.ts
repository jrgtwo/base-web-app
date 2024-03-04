import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { gql } from 'graphql-tag';

import path from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';

import { resolvers } from './graphql/resolvers/index.js';
import { SpotifyAPI } from './graphql/datasources/spotify-api.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const typeDefs = gql(
  readFileSync(path.resolve(__dirname, './graphql/schema.graphql'), {
    encoding: 'utf-8'
  })
);

async function strartApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers, introspection: true });

  const { url } = await startStandaloneServer(server, {
    context: async () => {
      const { cache } = server;
      return {
        cors: { origin: true },
        introspection: true,
        dataSources: {
          spotifyAPI: new SpotifyAPI({ cache })
        }
      };
    }
  });
  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}

strartApolloServer();
