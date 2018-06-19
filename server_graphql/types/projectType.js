const graphql = require("graphql");
const UserType = require("./userType");
const User = require("../models/User");
const Project = require("../models/Project");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = graphql;

const ProjectType = new GraphQLObjectType({
  name: "ProjectType",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    image: { type: GraphQLString },
    contributors: {
      type: new GraphQLList(UserType),
      resolve(parentValues, args, request) {
        return Project.findContributors(parentValues.id);
      }
    }
  })
});

module.exports=ProjectType;
