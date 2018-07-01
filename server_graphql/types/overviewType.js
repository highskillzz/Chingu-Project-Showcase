const graphql = require("graphql");
const User = require("../models/User");
const Project = require("../models/Project");
const Resource = require("../models/Resource");

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
  } = graphql;


  const OverviewType = new GraphQLObjectType({
    name: "OverviewType",
    fields: () => ({
      id: { type: GraphQLString },
      title: { type: GraphQLString },
      url: { type: GraphQLString }
      }
    })
  });

  module.exports=OverviewType;


const UserType = require("./userType");
const ProjectType = require("./projectType");
