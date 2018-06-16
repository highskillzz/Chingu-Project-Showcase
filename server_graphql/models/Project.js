const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");

const ProjectSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: String,
  likes: { type: Number, default: 0 },
  build:{ type: String, required: true },
  version:{ type: String, required: true },
  chat:{ type: String, required: true },
  features:[{ type: String, required: true }],
  keywords:[{ type: String, required: true }],
  resources:[{ type: String}],
  browserSupport:[{ type: String, required: true }],
  contributors: [
    {
      type: Schema.Types.ObjectId,
      ref: User
    }
  ]
  // in V1 can make the contributors to be an array of string
});

// add comments later on to the schema

ProjectSchema.methods.like = function likeProject(id) {
  const Project = mongoose.model("project", ProjectSchema);
  return Project.findById(id).then(project => {
    ++project.likes;
    return project.save();
  });
};

ProjectSchema.methods.findContributors = function(id) {
  return this.findById(id)
    .populate(contributors)
    .then(project => {
      return project.contributors;
    });
};

module.exports = mongoose.model("project", ProjectSchema);
