const mongoose = require("mongoose");
const ProjectType = require("./../types/projectType");
const UserType = require("./../types/userType");
const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString
} = graphql;

const Project = require("../models/Project");
const User = require("../models/User");

const mutation = new GraphQLObjectType({
  name: "mutation",
  fields: () => ({
    addUser: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        username: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        githubProfile: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValues, args, request) {
        return User.create(args);
      }
    },
    addProject: {
      type: ProjectType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        image: { type: GraphQLString },
        contributors: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve(parentValues, args, request) {
        return Project.create(args);
      }
    }
  })
});

// contributor:{ type: new GraphQLNonNull(new GraphQLList(GraphQLID))

module.exports = mutation;
