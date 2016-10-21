'use strict';

var _ = require('lodash');
var Student = require('./student.model');

// Get list of locations
exports.index = function(req, res) {
  //console.log(req.user._id);
  Student.find(function (err, locations) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(locations);
  });
};

// Get a single location
exports.show = function(req, res) {
  Student.findById(req.params.id, function (err, student) {
    if(err) { return handleError(res, err); }
    if(!student) { return res.status(404).send('Not Found'); }
    return res.json(student);
  });
};

// Creates a new location in the DB.
exports.create = function(req, res) {
  Student.create(req.body, function(err, student) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(student);
  });
};

// Updates an existing location in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Student.findById(req.params.id, function (err, student) {
    if (err) { return handleError(res, err); }
    if(!student) { return res.status(404).send('Not Found'); }
    var student = _.merge(student, req.body);
    student.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(student);
    });
  });
};

// Deletes a location from the DB.
exports.destroy = function(req, res) {
  Student.findById(req.params.id, function (err, student) {
    if(err) { return handleError(res, err); }
    if(!student) { return res.status(404).send('Not Found'); }
    student.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
