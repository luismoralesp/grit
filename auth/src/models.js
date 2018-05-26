var mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, unique: true, required: true },
  secret: { type: String, required: true },
  userId: { type: String, required: true }
});

const CodeSchema = new mongoose.Schema({
  value: { type: String, required: true },
  redirectionURL: { type: String, required: true },
  userId: { type: String, required: true },
  clientId: { type: String, required: true }
});

const TokenSchema = new mongoose.Schema({
  value: { type: String, required: true },
  userId: { type: String, required: true },
  clientId: { type: String, required: true }
});

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// Export Mongoose models
module.exports = {
  Code: mongoose.model('Code', CodeSchema),
  Client: mongoose.model('Client', ClientSchema),
  Token: mongoose.model('Token', TokenSchema),
  User: mongoose.model('User', UserSchema)
};
