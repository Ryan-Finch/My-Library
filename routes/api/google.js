const express = require('express');
const router = express.Router();
const googleCtrl = require('../../controllers/google')

router.use(require('../../config/auth'))
router.get('/', googleCtrl.getKey)

module.exports= router;