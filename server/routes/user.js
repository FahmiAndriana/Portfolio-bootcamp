const express = require('express');
const router = express.Router();
const API = require('../controllers/user');

router.get('/users', API.getUser);
module.exports = router;