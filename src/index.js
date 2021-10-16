const { ApolloServer } = require("apollo-server");
const { userApi, userResolvers, userSchema } = require("./user");

const server = new ApolloServer({
  typeDefs: [userSchema],
  resolvers: [userResolvers],
  dataSources: () => ({
    userApi,
  }),
});

server.listen().then(({ url }) => {
  console.log(`server running ${url}`);
});
