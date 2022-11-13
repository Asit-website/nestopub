const router = require('express').Router();

const brokerCtrl = require('../controller/brokerCtrl');

router.route('/broker')
      .get(brokerCtrl.getBroker)
      .post(brokerCtrl.createBroker)

module.exports = router;