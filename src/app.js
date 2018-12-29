import mongoose from 'mongoose';
import { GraphQLServer } from 'graphql-yoga';
// import schema from './schema';
import graphqlConfig from './api';

const PORT = 3000;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/gql_db', { useNewUrlParser: true });

const options = {
  tracing: true,
  debug: true,
  port: PORT,
  endpoint: '/graphql',
  playground: '/docs'
}

const server = new GraphQLServer(graphqlConfig);
server.start(options, () => console.log(`Server is Runnning at ${PORT}`));