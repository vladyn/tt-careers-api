const { ApolloServer } = require("apollo-server");
const typeDefs = require("./src/schema/schema");
const resolvers = require("./src/resolvers/resolvers");
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

