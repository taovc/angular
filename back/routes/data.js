const express = require('express');
const router = express.Router();
const dataCtrl = require('../controllers/data')

router.post('/', dataCtrl.createNote);
router.get('/', dataCtrl.getAllNotes);
router.put('/:id', dataCtrl.modifyNote);
router.delete('/:id', dataCtrl.deleteNote);

module.exports = router
