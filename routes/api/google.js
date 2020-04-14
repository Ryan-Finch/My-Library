const express = require('express');
const router = express.Router();
const googleCtrl = require('../../controllers/google')

router.use(require('../../config/auth'))
router.get('/:term', googleCtrl.getKey)
router.get('/volume/:id', googleCtrl.getOne)

module.exports= router;