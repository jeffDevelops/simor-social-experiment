/* jshint esversion:6 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Traffic = new Schema({
  validatedTrafficTotal: Number,
  trafficMohammed: Number,
  trafficAarav: Number,
  trafficWei: Number,
  trafficNoah: Number,
  trafficSantiago: Number,
  trafficAlireza: Number,
  trafficFatima: Number,
  trafficMary: Number,
  trafficJing: Number,
  trafficAmelia: Number,
  trafficEmma: Number
});

module.exports = mongoose.model('traffic', Traffic, 'traffic');