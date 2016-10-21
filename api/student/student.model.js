'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StduentSchema = new Schema({
  name: String,
  email: String,
  course: String,
  gender: String,
  subjects: Array
});

module.exports = mongoose.model('Student', StduentSchema);
