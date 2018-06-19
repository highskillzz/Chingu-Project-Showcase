const graphql = require("graphql");
const UserType = require("./userType");
const User = require("../models/User");
const Project = require("../models/Project");
const Resource = require("../models/Resource");
const ProjectType = require("./projectType");

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
  } = graphql;


  const ResourceType = new GraphQLObjectType({
    name: "ResourceType",
    fields: () => ({
      id: { type: GraphQLString },
      title: { type: GraphQLString },
      url: { type: GraphQLString },
      project:{
        type:ProjectType,
        resolve(parentValues,args){
          return Project.findById(parentValues.id).populate("resources")
        }
      }
    })
  });

  module.exports=ResourceType;