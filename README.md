# 📚 NaijaReads Bookstore API

A professional RESTful API built with **Node.js**, **Express**, and **MongoDB**. This API manages a bookstore collection with a focus on Nigerian literature, featuring localized currency handling, schema validation, and interactive Swagger documentation.

🚀 **Live Demo:** [https://bookstore-rest-api-myio.onrender.com/](https://bookstore-rest-api-myio.onrender.com/)  
📖 **API Documentation:** [https://bookstore-rest-api-myio.onrender.com/api/v1/docs](https://bookstore-rest-api-myio.onrender.com/api/v1/docs)

---

## ✨ Features

- **Full CRUD Functionality:** Create, Read, Update, and Delete book records.
- **Localized Pricing:** Implements Mongoose getters to handle Naira (NGN) currency formatting.
- **Data Validation:** Strict schema enforcement using Mongoose (ISBN validation, required fields, and stock limits).
- **Interactive Documentation:** Fully documented with **Swagger (OpenAPI 3.0)** for easy testing.
- **Production Ready:** Hosted on Render with environment variable security.

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (NoSQL)
- **ODM:** Mongoose
- **Documentation:** Swagger UI, JSDoc
- **Deployment:** Render

---

## 📦 Installation & Setup

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Emmanuel8577.git](https://github.com/Emmanuel8577/BookStore-REST-API.git)
   cd BookStore-REST-API
Install dependencies:Bashnpm install
Configure Environment Variables:Create a .env file in the root directory and add your MongoDB connection string:Code snippetMONGO_URL=your_mongodb_atlas_uri
PORT=3000
Start the server:Bash# For development (with nodemon)
npm run dev

# For production
npm start
🛣️ API EndpointsMethodEndpointDescriptionGET/api/v1/booksFetch all books in the storePOST/api/v1/booksAdd a new book to the databaseGET/api/v1/books/:idGet details of a specific bookPATCH/api/v1/books/:idUpdate book details (price, stock, etc.)DELETE/api/v1/books/:idRemove a book from the store📖 Database Schema SampleJSON{
  "title": "Things Fall Apart",
  "author": {
    "firstName": "Chinua",
    "lastName": "Achebe"
  },
  "price": 5000,
  "category": "Fiction",
  "stock": 25,
  "isAvailable": true
}
👨‍💻 AuthorEmmanuel Adikwu GitHub | LinkedIn📄 LicenseThis project is licensed under the MIT License.
