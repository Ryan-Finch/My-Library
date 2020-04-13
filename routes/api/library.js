const express = require('express');
const router = express.Router();
const libraryCtrl = require('../../controllers/library')

router.use(require('../../config/auth'))
router.get('/', libraryCtrl.index)
router.post('/', libraryCtrl.create)
module.exports= router;