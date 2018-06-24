const graphql = require("graphql");
const User = require("../models/User");
const Project = require("../models/Project");
const Resource = require("../models/Resource");

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
          // return Project.findById(parentValues.id).populate("resources")
          return new Promise((resolve, reject) => {
            Project.findById(parentValues.id)
              .populate("resources")
              .then(project => {
                resolve(project.resources);
              });
          });
        }
      }
    })
  });

  module.exports=ResourceType;


const UserType = require("./userType");
const ProjectType = require("./projectType");
