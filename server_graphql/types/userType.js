const graphql = require("graphql");

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
      // type: ProjectType,
      resolve(parentValues, args) {
        return new Promise((resolve, reject) => {
          User.findById(parentValues.id)
            .populate("projects")
            .then(user => {
              resolve(user.projects);
            });
        });
      }
    }
  })
});

module.exports = UserType;

// This is here to prevent circular dependencies problem which will lead to the formation of infinite loop
const ProjectType = require("./projectType");
