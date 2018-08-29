var express = require('express');
var router = express.Router();
var application_controller = require('../controllers/applicationController');

// GET catalog home page.
router.get('/', application_controller.index);

// GET request for Application Form in English.
router.get('/formen', application_controller.application_en_create_get);

// POST request for Application Form in English.
router.post('/formen', application_controller.application_en_create_post);

// GET request for Application Form in Spanish.
router.get('/formes', application_controller.application_es_create_get);

// POST request for Application Form in Spanish.
router.post('/formes', application_controller.application_es_create_post);

// GET request for Application Form in French.
router.get('/formfr', application_controller.application_fr_create_get);

// POST request for Application Form in French.
router.post('/formfr', application_controller.application_fr_create_post);

router.get('/formthanks',application_controller.application_thanks);

//GET request for the viewer
router.get('/viewer', application_controller.application_viewer);

module.exports = router;
