const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController'); // Assume controllers are created

// User Routes
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);
router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;
