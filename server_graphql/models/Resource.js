const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ResourceSchema = new Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
    project:{
        type: Schema.Types.ObjectId,
        ref: "project"
      }
});


module.exports = mongoose.model("resource", ResourceSchema);