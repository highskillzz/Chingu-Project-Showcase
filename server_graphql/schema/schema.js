const graphql = require("graphql");
// const axios = require("axios");
const RootQuery = require("./RootQueryType");
const Mutation = require("./Mutation");

const { GraphQLSchema } = graphql;


module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
