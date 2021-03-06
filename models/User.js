const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
        firstname: String,
        lastname: String,
        email: String,
        password: String,
        role: {type:String, default:"not admin"}
})

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;