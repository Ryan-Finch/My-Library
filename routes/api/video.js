const express = require('express');
const router = express.Router();
const videoCtrl = require('../../controllers/video')

router.use(require('../../config/auth'))
router.post('/', videoCtrl.create)

module.exports= router;