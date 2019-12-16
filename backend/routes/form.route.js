const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const formController = require('../controllers/form.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', formController.test);

router.post('/submit',formController.formCreate);

module.exports = router;

