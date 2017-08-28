/*jshint esversion: 6*/
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/same-name-social-experiment');

const db = require('./models/index');

db.Traffic.remove({}, function(err, docs) {
  if (err) throw err;
  console.log(docs);
});

db.Traffic.create({
  validatedTrafficTotal: 0,
  trafficMohammed: 0,
  trafficAarav: 0,
  trafficWei: 0,
  trafficNoah: 0,
  trafficSantiago: 0,
  trafficAlireza: 0,
  trafficFatima: 0,
  trafficMary: 0,
  trafficJing: 0,
  trafficAmelia: 0,
  trafficEmma: 0
}, function(err, createdDoc) {
  if (err) throw err;
  console.log(createdDoc);
});