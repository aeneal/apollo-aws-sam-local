var server = require('apollo-server-lambda')

const schema = require('./schema');
const resolvers = require('./resolvers');

const { makeExecutableSchema } = require('graphql-tools');



// Put together a schema
const myGraphQLSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});


exports.graphqlHandler = server.graphqlLambda({ schema: myGraphQLSchema });
exports.graphiqlHandler = server.graphiqlLambda({
  endpointURL: '/graphql',
});

