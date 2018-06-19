const graphql = require("graphql");
const ProjectType = require("./projectType");

const { GraphQLObjectType, GraphQLString, GraphQLList } = graphql;

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    githubProfile: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    email: { type: GraphQLString },
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parentValues, args) {
        return User.findById(parentValues.id).populate("projects");
      }
    }
  })
});

module.exports = UserType;
