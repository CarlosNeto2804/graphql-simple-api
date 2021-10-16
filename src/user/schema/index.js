const { gql } = require("apollo-server");

module.exports = gql`
  type User {
    id: ID!
    name: String!
    active: Boolean!
    email: String
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }
`;
