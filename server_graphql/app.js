const express=require("express");
const expressGraphQL=require("express-graphql");
const schema=require("./schema/schema");
const mongoose = require('mongoose');


const app = express();

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/chingu_showcase");
mongoose.connection
    .once('open', () => console.log('Connected to Mongo instance.'))
    .on('error', error => console.log('Error connecting to Mongo:', error));


app.use("/graphql",expressGraphQL({
    schema,
    graphiql:true
}))

app.listen(4000,()=>{
    console.log("Listening on port 4000");
})