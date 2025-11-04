const express = require('express');
const router = express.Router();
const c = require('../controllers/candidateController');
router.get('/', c.getAll);
router.post('/', c.add);
router.put('/:id', c.update);
router.delete('/:id', c.remove);
module.exports = router;
