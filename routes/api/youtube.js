const express = require('express');
const router = express.Router();
const youtubeCtrl = require('../../controllers/youtube')

router.use(require('../../config/auth'))
router.get('/:id', youtubeCtrl.getKey)

module.exports= router;