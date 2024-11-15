const express = require('express');
const {
    addBook,
    // other controllers
} = require('../controllers/bookController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, addBook);
// Define other routes (e.g., getBooks, updateBook, deleteBook)

module.exports = router;
