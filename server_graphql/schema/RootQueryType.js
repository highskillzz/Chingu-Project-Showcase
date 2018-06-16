const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;

const ProjectType  = require('./../types/projectType');
const UserType  = require('./../types/userType');
const Project=require("../models/Project");
const User=require("../models/User");

 const RootQuery=new GraphQLObjectType({
    name:"RootQueryType",
    fields: () => ({
        users:{
            type:new GraphQLList(ProjectType),
            resolve(parentValues,args,request){
                return Project.find();
            }
        },
        user:{
            type:ProjectType,
            args:{id:{type:new GraphQLNonNull(GraphQLID)}},
            resolve(parentValue,args,request){
                return Project.findById(args.id)
            }
        },
        users:{
            type:new GraphQLList(UserType),
            resolve(parentValues,args,request){
                return User.find();
            }
        },
        user:{
            type:UserType,
            args:{id:{type:new GraphQLNonNull(GraphQLID)}},
            resolve(parentValue,args,request){
                return User.findById(args.id)
            }
        },
        
    })
})

module.exports = RootQuery;