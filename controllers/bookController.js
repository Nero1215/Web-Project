const Book = require('../models/Book');

exports.addBook = async (req, res) => {
    const { title, author, isbn } = req.body;
    try {
        const newBook = await Book.create({ title, author, isbn });
        res.status(201).json({ message: 'Book added', book: newBook });
    } catch (error) {
        console.error('Error adding book:', error);
        res.status(500).json({ error: 'Error adding book' });
    }
};

// Implement other CRUD operations similarly
