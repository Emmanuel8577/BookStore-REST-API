const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    nationality: {
        type: String,
        required: true,
        trim: true
    },
    bio: {
        type: String,
        required: true,
        trim: true
    },
    birthYear: {
        type: Number,
        required: true,
        min: 1000,
        max: new Date().getFullYear()
    }
});

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Book title is required'],
        trim: true,
        minlength: [2, 'Title must be at least 2 characters long'],
        maxlength: [200, 'Title cannot exceed 200 characters']
    },
    author: {
        type: authorSchema,
        required: [true, 'Author information is required']
    },
    publicationDate: {
        type: Date,
        required: [true, 'Publication date is required'],
        validate: {
            validator: function(value) {
                return value <= new Date();
            },
            message: 'Publication date cannot be in the future'
        }
    },
    publisher: {
        type: String,
        required: [true, 'Publisher is required'],
        trim: true
    },
    language: {
        type: String,
        required: [true, 'Language is required'],
        trim: true,
        default: 'English'
    },
    pages: {
        type: Number,
        required: [true, 'Number of pages is required'],
        min: [1, 'Book must have at least 1 page'],
        max: [5000, 'Number of pages cannot exceed 5000']
    },
    chapters: {
        type: Number,
        required: [true, 'Number of chapters is required'],
        min: [1, 'Book must have at least 1 chapter']
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price cannot be negative'],
        get: function(value) {
            // Formats 4500 to ₦4,500.00
            return `₦${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
        }
    },
    currency: {
        type: String,
        required: true,
        enum: ['NGN'],
        default: 'NGN'
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true,
        minlength: [10, 'Description must be at least 10 characters long'],
        maxlength: [2000, 'Description cannot exceed 2000 characters']
    },
    rating: {
        type: Number,
        required: true,
        min: [0, 'Rating cannot be less than 0'],
        max: [5, 'Rating cannot exceed 5'],
        default: 0
    },
    reviewCount: {
        type: Number,
        required: true,
        min: [0, 'Review count cannot be negative'],
        default: 0
    },
    genres: {
        type: [String],
        required: [true, 'At least one genre is required'],
        validate: {
            validator: function(genres) {
                return genres.length > 0 && genres.length <= 5;
            },
            message: 'Book must have 1-5 genres'
        }
    },
    tags: {
        type: [String],
        default: [],
        validate: {
            validator: function(tags) {
                return tags.length <= 10;
            },
            message: 'Cannot have more than 10 tags'
        }
    },
    format: {
        type: String,
        required: true,
        enum: ['Hardcover', 'Paperback', 'E-book', 'Audio'],
        default: 'Paperback'
    },
    stock: {
        type: Number,
        required: true,
        min: [0, 'Stock cannot be negative'],
        default: 0,
        validate: {
            validator: Number.isInteger,
            message: 'Stock must be an integer'
        }
    },
    bestseller: {
        type: Boolean,
        default: false
    },
    featured: {
        type: Boolean,
        default: false
    },
    discount: {
        type: Number,
        min: [0, 'Discount cannot be negative'],
        max: [100, 'Discount cannot exceed 100%'],
        default: 0
    }
}, {
    timestamps: true, // Auto-manages createdAt and updatedAt
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true, getters: true }
});
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
