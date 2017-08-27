/* jshint esversion: 6 */
const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller');


router.route('/samenamesocialexperiment/howbigcanitget')
      //Access the site
      .get(controller.renderSite)
      //If validated, update
      .post(controller.updateCounter);


router.route('/samenamesocialexperiment/siteadministrator')
      //Access the site
      .get(controller.renderResults);

module.exports = router;