const express = require('express');
const { getBooks, addBook, updateBook, deleteBook } = require('../controllers/bookController');
const { authenticateToken, isAdmin } = require('../middleware/auth');

const router = express.Router();

router.get('/', getBooks);
router.post('/', authenticateToken, isAdmin, addBook);
router.put('/:id', authenticateToken, isAdmin, updateBook);
router.delete('/:id', authenticateToken, isAdmin, deleteBook);

module.exports = router;
