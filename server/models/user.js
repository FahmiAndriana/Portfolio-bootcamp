const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const schema = new Schema({
  name: String,
  title: String,
  Desc: String,
});

module.exports = mongoose.model('users',schema);