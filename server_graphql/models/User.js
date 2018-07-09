const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");




// Below is for development

const UserSchema = new Schema({
  name: { type: String },
  username: { type: String },
  password: { type: String },
  email: { type: String },
  githubProfile: { type: String },
  projects:[{
    type: Schema.Types.ObjectId,
    ref: "project"
  }]
});



// Below is for production

// const UserSchema = new Schema({
//   name: { type: String, required: true },
//   username: { type: String, required: true },
//   password: { type: String, required: true },
//   email: { type: String, required: true },
//   githubProfile: { type: String, required: true },
//   projects:[{
//     type: Schema.Types.ObjectId,
//     ref: "project"
//   }]
// });

UserSchema.pre("save", function save(next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

UserSchema.statics.comparePassword = function comparePassword(
  candidatePassword,
  cb
) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};

module.exports =mongoose.model("user", UserSchema);
