const express = require("express");
const router = express.Router();
const {
  getBooks, 
   createBooks,
   getBook,
   updateBook,
   deleteBooks
} = require('../controllers/bookController')


//GET BOOKS FROM STORE
router.get('/', getBooks);


// CREATE BOOKS IN THE STORE
router.post('/',  createBooks);


//TO GET A SINGLE BOOK FROM STORE
router.get('/:id',getBook )

//TO UPDATE A BOOK IN THE STORE
router.patch('/:id', updateBook)

//TO DELETE A SINGLE BOOK IN THE STORE
router.delete('/:id', deleteBooks)



module.exports = router;