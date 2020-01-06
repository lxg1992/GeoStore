const express = require('express')
const router = express.Router();
const { getStores, addStore } = require('../controllers/stores')

module.exports = router

router.route('/').get(getStores).post(addStore)


 