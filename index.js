const express = require('express');
require('dotenv').config();
const connectDB = require('./connect');
const router = require('./Routes/book')



let app = express();

app.use(express.json()); 
app.use('/api/v1/books', router)






const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        });
    } catch (err) {
        console.log(err);
    }
};

start();