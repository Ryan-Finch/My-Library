const express = require('express');
const router = express.Router();
const libraryCtrl = require('../../controllers/library')

router.use(require('../../config/auth'))
router.get('/', libraryCtrl.index)
router.get('/:id', libraryCtrl.indexOne)
router.post('/', libraryCtrl.create)
router.put('/:id', libraryCtrl.update)
router.delete('/:id', libraryCtrl.delete)


module.exports= router;