/* jshint esversion: 6 */
const db = require('../models/index.js');

function renderSite(req, res) {
  res.render('home');
}

function updateCounter(req, res, next) {
  let incomingName = req.body.name;
  let propertyToUpdate = `traffic${incomingName}`;
  console.log('incomingName: ' + incomingName);
  console.log('propertyToUpdate: ' + propertyToUpdate);
  // db.Traffic.findOne({}, function(err, foundDoc) {
  //   let updatedNameTotal = foundDoc[propertyToUpdate]++;
  //   let updatedTotal = foundDoc.validatedTrafficTotal++;
  // }).then( () => {
  db.Traffic.findOne({}, function(err, doc) {
    console.log('hi');
    if (err) {
      res.json({ error: 'Connection error.' });
    }
    console.log(doc);
    doc[propertyToUpdate]++;
    doc.validatedTrafficTotal++;
    doc.save( (err, savedDoc) => {
      if (err) {
        res.json({ error: 'Connection error.' });
      }
      res.json(savedDoc);
    });      
   });
}

/* Behold the glory of this 220-line reduction */

// function updateCounter(req, res) {
//   let userName = req.body;
//   console.log(userName);
//   let newValidatedTrafficTotal;
//   switch(userName.name) {
//     case 'Mohammed':
//       let newMohammed;
//       db.Traffic.findOne({}, function(err, foundDocs) {
//         if (err) throw err;
//         console.log(foundDocs);
//         newMohammed = foundDocs.trafficMohammed += 1;
//         newValidatedTrafficTotal = foundDocs.validatedTrafficTotal += 1;
//         console.log('first newMohammed: ' + newMohammed);
//         // console.log('first newValidatedTrafficTotal: ' + newValidatedTrafficTotal);
//       }).then(() => {
//         console.log('second newMohammed: ' + newMohammed);
//         console.log('second newValidatedTrafficTotal: ' + newValidatedTrafficTotal);
//         db.Traffic.findOneAndUpdate({}, { $set: {validatedTrafficTotal: newValidatedTrafficTotal, trafficMohammed: newMohammed }}, {$new: true}, function(err, doc) {
//         if (err) throw err;
//         console.log(doc);
//         res.json(doc); 
//         });
//       });
//       break;
//     case 'Aarav':
//       let newAarav;
//       db.Traffic.findOne({}, function(err, foundDocs) {
//         if (err) throw err;
//         console.log(foundDocs);
//         newAarav = foundDocs.trafficAarav += 1;
//         newValidatedTrafficTotal = foundDocs.validatedTrafficTotal += 1;
//         console.log('first newAarav: ' + newAarav);
//         // console.log('first newValidatedTrafficTotal: ' + newValidatedTrafficTotal);
//       }).then(() => {
//         console.log('second newAarav: ' + newAarav);
//         console.log('second newValidatedTrafficTotal: ' + newValidatedTrafficTotal);
//         db.Traffic.findOneAndUpdate({}, { $set: {validatedTrafficTotal: newValidatedTrafficTotal, trafficAarav: newAarav }}, {$new: true}, function(err, doc) {
//         if (err) throw err;
//         console.log(doc);
//         res.json(doc); 
//         });
//       });
//       break;
//     case 'Wei':
//       let newWei;
//       db.Traffic.findOne({}, function(err, foundDocs) {
//         if (err) throw err;
//         console.log(foundDocs);
//         newWei = foundDocs.trafficWei += 1;
//         newValidatedTrafficTotal = foundDocs.validatedTrafficTotal += 1;
//         console.log('first newWei: ' + newWei);
//         // console.log('first newValidatedTrafficTotal: ' + newValidatedTrafficTotal);
//       }).then(() => {
//         console.log('second newWei: ' + newWei);
//         console.log('second newValidatedTrafficTotal: ' + newValidatedTrafficTotal);
//         db.Traffic.findOneAndUpdate({}, { $set: {validatedTrafficTotal: newValidatedTrafficTotal, trafficWei: newWei }}, {$new: true}, function(err, doc) {
//         if (err) throw err;
//         console.log(doc);
//         res.json(doc); 
//         });
//       });
//       break;
//     case 'Noah':
//       let newNoah;
//       db.Traffic.findOne({}, function(err, foundDocs) {
//         if (err) throw err;
//         console.log(foundDocs);
//         newNoah = foundDocs.trafficNoah += 1;
//         newValidatedTrafficTotal = foundDocs.validatedTrafficTotal += 1;
//         console.log('first newNoah: ' + newNoah);
//         // console.log('first newValidatedTrafficTotal: ' + newValidatedTrafficTotal);
//       }).then(() => {
//         console.log('second newNoah: ' + newNoah);
//         console.log('second newValidatedTrafficTotal: ' + newValidatedTrafficTotal);
//         db.Traffic.findOneAndUpdate({}, { $set: {validatedTrafficTotal: newValidatedTrafficTotal, trafficNoah: newNoah }}, {$new: true}, function(err, doc) {
//         if (err) throw err;
//         console.log(doc);
//         res.json(doc); 
//         });
//       });
//       break;
//     case 'Santiago':
//       let newSantiago;
//       db.Traffic.findOne({}, function(err, foundDocs) {
//         if (err) throw err;
//         console.log(foundDocs);
//         newSantiago = foundDocs.trafficSantiago += 1;
//         newValidatedTrafficTotal = foundDocs.validatedTrafficTotal += 1;
//         console.log('first newSantiago: ' + newSantiago);
//         // console.log('first newValidatedTrafficTotal: ' + newValidatedTrafficTotal);
//       }).then(() => {
//         console.log('second newSantiago: ' + newSantiago);
//         console.log('second newValidatedTrafficTotal: ' + newValidatedTrafficTotal);
//         db.Traffic.findOneAndUpdate({}, { $set: {validatedTrafficTotal: newValidatedTrafficTotal, trafficSantiago: newSantiago }}, {$new: true}, function(err, doc) {
//         if (err) throw err;
//         console.log(doc);
//         res.json(doc); 
//         });
//       });
//       break;
//     case 'Fatima':
//       let newFatima;
//       db.Traffic.findOne({}, function(err, foundDocs) {
//         if (err) throw err;
//         console.log(foundDocs);
//         newFatima = foundDocs.trafficFatima += 1;
//         newValidatedTrafficTotal = foundDocs.validatedTrafficTotal += 1;
//         console.log('first newFatima: ' + newFatima);
//         // console.log('first newValidatedTrafficTotal: ' + newValidatedTrafficTotal);
//       }).then(() => {
//         console.log('second newFatima: ' + newFatima);
//         console.log('second newValidatedTrafficTotal: ' + newValidatedTrafficTotal);
//         db.Traffic.findOneAndUpdate({}, { $set: {validatedTrafficTotal: newValidatedTrafficTotal, trafficFatima: newFatima }}, {$new: true}, function(err, doc) {
//         if (err) throw err;
//         console.log(doc);
//         res.json(doc); 
//         });
//       });
//       break;
//     case 'Mary':
//       let newMary;
//       db.Traffic.findOne({}, function(err, foundDocs) {
//         if (err) throw err;
//         console.log(foundDocs);
//         newMary = foundDocs.trafficMary += 1;
//         newValidatedTrafficTotal = foundDocs.validatedTrafficTotal += 1;
//         console.log('first newMary: ' + newMary);
//         // console.log('first newValidatedTrafficTotal: ' + newValidatedTrafficTotal);
//       }).then(() => {
//         console.log('second newMary: ' + newMary);
//         console.log('second newValidatedTrafficTotal: ' + newValidatedTrafficTotal);
//         db.Traffic.findOneAndUpdate({}, { $set: {validatedTrafficTotal: newValidatedTrafficTotal, trafficMary: newMary }}, {$new: true}, function(err, doc) {
//         if (err) throw err;
//         console.log(doc);
//         res.json(doc); 
//         });
//       });
//       break;
//     case 'Jing':
//       let newJing;
//       db.Traffic.findOne({}, function(err, foundDocs) {
//         if (err) throw err;
//         console.log(foundDocs);
//         newJing = foundDocs.trafficJing += 1;
//         newValidatedTrafficTotal = foundDocs.validatedTrafficTotal += 1;
//         console.log('first newJing: ' + newJing);
//         // console.log('first newValidatedTrafficTotal: ' + newValidatedTrafficTotal);
//       }).then(() => {
//         console.log('second newJing: ' + newJing);
//         console.log('second newValidatedTrafficTotal: ' + newValidatedTrafficTotal);
//         db.Traffic.findOneAndUpdate({}, { $set: {validatedTrafficTotal: newValidatedTrafficTotal, trafficJing: newJing }}, {$new: true}, function(err, doc) {
//         if (err) throw err;
//         console.log(doc);
//         res.json(doc); 
//         });
//       });
//       break;
//     case 'Amelia':
//       let newAmelia;
//       db.Traffic.findOne({}, function(err, foundDocs) {
//         if (err) throw err;
//         console.log(foundDocs);
//         newAmelia = foundDocs.trafficAmelia += 1;
//         newValidatedTrafficTotal = foundDocs.validatedTrafficTotal += 1;
//         console.log('first newAmelia: ' + newAmelia);
//         // console.log('first newValidatedTrafficTotal: ' + newValidatedTrafficTotal);
//       }).then(() => {
//         console.log('second newAmelia: ' + newAmelia);
//         console.log('second newValidatedTrafficTotal: ' + newValidatedTrafficTotal);
//         db.Traffic.findOneAndUpdate({}, { $set: {validatedTrafficTotal: newValidatedTrafficTotal, trafficAmelia: newAmelia }}, {$new: true}, function(err, doc) {
//         if (err) throw err;
//         console.log(doc);
//         res.json(doc); 
//         });
//       });
//       break;
//     case 'Emma':
//       let newEmma;
//       db.Traffic.findOne({}, function(err, foundDocs) {
//         if (err) throw err;
//         console.log(foundDocs);
//         newEmma = foundDocs.trafficEmma += 1;
//         newValidatedTrafficTotal = foundDocs.validatedTrafficTotal += 1;
//         console.log('first newEmma: ' + newEmma);
//         // console.log('first newValidatedTrafficTotal: ' + newValidatedTrafficTotal);
//       }).then(() => {
//         console.log('second newEmma: ' + newEmma);
//         console.log('second newValidatedTrafficTotal: ' + newValidatedTrafficTotal);
//         db.Traffic.findOneAndUpdate({}, { $set: {validatedTrafficTotal: newValidatedTrafficTotal, trafficEmma: newEmma }}, {$new: true}, function(err, doc) {
//         if (err) throw err;
//         console.log(doc);
//         res.json(doc); 
//         });
//       });
//       break;
//     case 'Alireza':
//       let newAlireza;
//       db.Traffic.findOne({}, function(err, foundDocs) {
//         if (err) throw err;
//         console.log(foundDocs);
//         newAlireza = foundDocs.trafficAlireza += 1;
//         newValidatedTrafficTotal = foundDocs.validatedTrafficTotal += 1;
//         console.log('first newAlireza: ' + newAlireza);
//         // console.log('first newValidatedTrafficTotal: ' + newValidatedTrafficTotal);
//       }).then(() => {
//         console.log('second newAlireza: ' + newAlireza);
//         console.log('second newValidatedTrafficTotal: ' + newValidatedTrafficTotal);
//         db.Traffic.findOneAndUpdate({}, { $set: {validatedTrafficTotal: newValidatedTrafficTotal, trafficAlireza: newAlireza }}, {$new: true}, function(err, doc) {
//         if (err) throw err;
//         console.log(doc);
//         res.json(doc); 
//         });
//       });
//       break;
//     default:
//     console.log("A name is spelled wrong somewhere.");
//     db.Traffic.findOne({}, function(err, doc) {
//       if (err) throw err;
//       res.json(doc);
//     });
//     break;
//   }
// }

module.exports = {
  renderSite: renderSite,
  updateCounter: updateCounter
};
