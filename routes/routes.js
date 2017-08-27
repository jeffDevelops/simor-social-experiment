/* jshint esversion: 6 */
const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller');


router.route('/samenamesocialexperiment/howbigcanitget')
      //Access the site
      .get(controller.renderSite)
      //If validated, update
      .post(controller.updateCounter);

module.exports = router;