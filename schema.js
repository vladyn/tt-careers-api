const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    careers: [Career]
    career(id: Int!): Career
  }
  type Career {
    id: Int,
    name: String,
    description: String
  }
  input CareerInput {
    name: String,
    description: String
  }
  type Mutation {
    login(email: String): String, # token
    createCareer(career: CareerInput)
  }
`

module.exports = typeDefs;
