const express = require('express')
const router = express.Router();
const { getStores } = require('../controllers/stores')

module.exports = router

router.route('/').get(getStores)
