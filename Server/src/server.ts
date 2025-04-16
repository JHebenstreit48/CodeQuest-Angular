import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// GraphQL schema
const typeDefs = `#graphql
  type Query {
    hello: String
    getMarkdown(path: String!): String!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello from CodeQuest GraphQL!',
    getMarkdown: async (_: any, { path: relativePath }: { path: string }) => {
      try {
        const fullPath = pathResolveSafe(relativePath);
        const content = await readFile(fullPath, 'utf-8');
        return content;
      } catch (err) {
        console.error('Markdown load error:', err);
        throw new Error('Markdown file not found.');
      }
    },
  },
};

// Secure path resolution
function pathResolveSafe(relativePath: string): string {
  const baseDir = path.join(__dirname, '..', 'Notes');
  const fullPath = path.join(baseDir, relativePath);
  if (!fullPath.startsWith(baseDir)) {
    throw new Error('Invalid path');
  }
  return fullPath;
}

// Start server
const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: 3001 },
});

console.log(`🚀 Server ready at ${url}`);
