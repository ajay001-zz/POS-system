const express = require('express');
const router = express.Router();
const SettingsController = require('../controllers/SettingsController');

// Settings Routes
router.get('/', SettingsController.getSettings);
router.put('/', SettingsController.updateSettings);

module.exports = router;
