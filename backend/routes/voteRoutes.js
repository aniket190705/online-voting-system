const express = require('express');
const router = express.Router();
const v = require('../controllers/voteController');
router.post('/', v.vote);
router.get('/results', v.results);
router.post('/reset', v.reset); // admin only
module.exports = router;
