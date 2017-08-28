/*jshint esversion: 6*/
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/same-name-social-experiment');

module.exports.Traffic = require('./traffic');