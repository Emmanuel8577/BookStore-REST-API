const Book = require('../models/bookModel');




const getBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json({ count: books.length, books });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}



const createBooks = async (req, res, next) => { 
   try {
    const book = await Book.create(req.body);
    res.status(201).json({ book });
   } catch (err) {
   
    res.status(500).json({ success: false, error: err.message });
   }
}



const getBook = async (req, res) =>{
    try{
        const id = req.params.id
        const book = await Book.findOne({_id: id})
        if (!book){
            res.status(404).json({msg: "Book not found in our database"})
        }
        res.status(200).json({book})

    } catch (err) {
        res.status(500).json({msg: err})
    }
}



const updateBook = async (req, res) =>{
     try{
        const id = req.params.id
        const book = await Book.findOneAndUpdate({_id: id}, req.body, 
           { 
                new: true,           
                runValidators: true 
            }
        )
        if (!book){
            res.status(404).json({msg: "Book not found in our database"})
        }
        res.status(200).json({book})

    } catch (err) {
        res.status(500).json({msg: err})
    }
}



const deleteBooks = async (req, res) =>{
   try{
        const id = req.params.id
        const book = await Book.findOneAndDelete({_id: id})
        if (!book){
            res.status(404).json({msg: "Book not found in our database"})
        }
        res.status(200).send('Task has been deleted successfully')

    } catch (err) {
        res.status(500).json({msg: err})
    }
}


module.exports = {getBooks, createBooks, getBook, updateBook, deleteBooks}


