import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql/index';

const app = express();
const port = 9000;

const server = new ApolloServer({
  typeDefs,
  resolvers
});

(async () => {
  await server.start().then(() => {
    server.applyMiddleware({
      app,
      path: '/api'
    });
    app.listen(port);
    console.log(`[app]: http://localhost:${port}`);
  });
})();

// typeDefs
// resolvers