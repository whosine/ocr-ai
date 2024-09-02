const express = require('express');
const { upload, createCollection } = require('../controllers/collectionController');

const router = express.Router();

// Route to create a new collection with file uploads
router.post('/', upload.array('uploadedFiles'), createCollection);

module.exports = router;
