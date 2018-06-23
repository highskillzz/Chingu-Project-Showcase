const graphql = require("graphql");

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
        console.log(Project.findContributors(parentValues.id))
        return Project.findContributors(parentValues.id);
      }
    },
    resources:{
      type: new GraphQLList(ResourceType),
      resolve(parentValues, args, request) {
        return Project.findResources(parentValues.id);
      }
    }
  })
});

module.exports=ProjectType;



// This is here to prevent circular dependencies problem which will lead to the formation of infinite loop

const UserType = require("./userType");
const ResourceType = require("./resourceType");